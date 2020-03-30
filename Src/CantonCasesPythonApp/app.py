import pandas as pd
from flask import Flask, render_template
from flask import request, jsonify

app = Flask(__name__)

# These names may change in the future when adapting to actual backend data
columns_filters = ['age_range', 'gender', 'risk']
columns_confirm = ['positive_to_test']
columns_date = ['day']
columns_symptoms = ['temperature', 'coughing', 'sneezing', 'throat_pain', 'fatigue', 'breathing_impaired',
                    'headache', 'diarrhea', 'nausea', 'loss_of_smell']
columns_canton = ['KANTONSNR', 'KANTONSNAM', 'KUERZEL', 'KANTONSNAM_CLEAN', 'N_INHABITANTS']
unique_canton_codes = ['BE', 'ZH', 'AG', 'LU', 'UR', 'SZ', 'OW', 'NW', 'GL', 'ZG', 'FR',
                       'SO', 'BS', 'BL', 'SH', 'AR', 'AI', 'SG', 'GR', 'TG', 'TI', 'VD',
                       'VS', 'NE', 'GE', 'JU']


@app.route("/app", methods=["POST"])
def app_visualizations():
    data = request.json
    # mocked_data = {"positive_to_test": False,
    #                "symptoms": "all",
    #                "gender": "F",
    #                "age_range": "66-80",
    #                "risk": False,
    #                "day": "30.03.2020"}
    print(data)

    df_users = pd.read_csv("./Covid_Data_Final.csv")

    # Transform data type from boolean requests
    data['positive_to_test'] = True if data['positive_to_test'] == 'True' else False
    data['risk'] = True if data['risk'] == 'True' else False

    # Age ranges transformation
    condition_children = (df_users['age'] <= 18)
    condition_young = (df_users['age'] > 18) & (df_users['age'] <= 30)
    condition_adult_early = (df_users['age'] > 30) & (df_users['age'] <= 45)
    condition_adult_late = (df_users['age'] > 45) & (df_users['age'] <= 65)
    condition_eldery_early = (df_users['age'] > 65) & (df_users['age'] <= 80)
    condition_eldery_late = (df_users['age'] > 80)

    df_users.loc[condition_children, 'age_range'] = '0-18'
    df_users.loc[condition_young, 'age_range'] = '19-30'
    df_users.loc[condition_adult_early, 'age_range'] = '31-45'
    df_users.loc[condition_adult_late, 'age_range'] = '46-65'
    df_users.loc[condition_eldery_early, 'age_range'] = '66-80'
    df_users.loc[condition_eldery_late, 'age_range'] = '81-on'

    # Define if filters needed or consider all users
    filters_possible = ["symptoms", "gender", "age_range"]
    filters_possible_final = []
    for filter in filters_possible:
        if data[filter] != "all":
            filters_possible_final.append(filter)

    # select the data given the filters
    condition_confirmed = (df_users['positive_to_test'] == data['positive_to_test'])
    condition_risk = (df_users['risk'] == data['risk'])
    condition_date = (df_users['day'] <= data['day'])
    df_users['day'] = pd.to_datetime(df_users['day'])
    df_complete_filtered_1 = df_users[condition_confirmed & condition_risk & condition_date]

    # select by given gender if filter selected
    if "gender" in filters_possible_final:
        df_complete_filtered_1 = df_complete_filtered_1[df_complete_filtered_1["gender"] == data['gender']]

    # select by given age if filter selected
    if "age_range" in filters_possible_final:
        df_complete_filtered_1 = df_complete_filtered_1[df_complete_filtered_1["age_range"] == data['age_range']]

    # select the number of users per canton
    n_users_canton = df_complete_filtered_1[['canton', 'user']].groupby('canton')['user'].nunique()

    # select number of users per symptoms per canton
    if "symptoms" in df_complete_filtered_1:
        selected_symptom = data['symptoms']
        df_complete_filtered_3 = df_complete_filtered_1[['user', 'canton', selected_symptom]]
        condition_symptom_true = (df_complete_filtered_3['selected_symptom'] > 0)
        df_complete_filtered_3 = df_complete_filtered_3[condition_symptom_true].drop_duplicates()
        n_cases_true_canton = df_complete_filtered_3[['user', 'canton']].groupby('canton')['user'].nunique()
    else:
        df_complete_filtered_1['symptoms_true'] = df_complete_filtered_1[columns_symptoms].any(axis=1)
        df_complete_filtered_3 = df_complete_filtered_1.loc[df_complete_filtered_1['symptoms_true']]
        df_complete_filtered_3 = df_complete_filtered_3[['user', 'canton']].drop_duplicates()
        n_cases_true_canton = df_complete_filtered_3.groupby('canton')['user'].nunique()

    # calculate percentages of cases per canton
    percent_cases_true_canton = n_cases_true_canton * 100 / n_users_canton

    # build output to send to the frontend
    result = pd.DataFrame({'nCasesCanton': n_users_canton, 'pCasesCanton': percent_cases_true_canton},
                          index=unique_canton_codes)
    json_result = result.reset_index().rename(columns={'index': 'KUERZEL'}).fillna(0).to_dict(orient='records')

    return jsonify({"data": json_result})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
