import React from 'react'
import { StyledBox, StyledFormControl, StyledFormLabel } from './Filter.styles'
import { FormControlLabel, RadioGroup, Radio, Slider } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'

export const FilterComponent: React.FunctionComponent = () => {
    const [gender, setGender] = React.useState('female')
    const [risk, setRisk] = React.useState('no')
    const [age, setAge] = React.useState([20, 37])
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2020-03-18T21:11:54')
    )

    const handleGenderChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setGender((event.target as HTMLInputElement).value)
    }

    const handleRiskChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setRisk((event.target as HTMLInputElement).value)
    }

    const handleAgeChange = (event, newValue) => {
        setAge(newValue)
    }

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date)
    }

    return (
        <StyledBox>
            <StyledFormControl>
                <StyledFormLabel component="legend">Gender</StyledFormLabel>
                <RadioGroup
                    name="gender"
                    value={gender}
                    onChange={handleGenderChange}
                >
                    <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                    />
                    <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                    />
                    <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                    />
                </RadioGroup>
                <StyledFormLabel component="legend">Age range</StyledFormLabel>
                <Slider
                    value={age}
                    onChange={handleAgeChange}
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                />
                <StyledFormLabel component="legend">
                    Is in risk group?
                </StyledFormLabel>
                <RadioGroup
                    name="risk"
                    value={risk}
                    onChange={handleRiskChange}
                >
                    <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                    />
                    <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                    />
                </RadioGroup>
                <StyledFormLabel component="legend">Day</StyledFormLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </StyledFormControl>
        </StyledBox>
    )
}
