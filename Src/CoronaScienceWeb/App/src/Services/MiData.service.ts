import axios, { AxiosRequestConfig } from 'axios'
import { Observation } from '~/Models/Observation'

const config = {
    baseURL: 'https://test.midata.coop',
    headers: {
        Authorization:
            'Bearer xa1BydVwguUHHZRLix3DBt6qwa-dtQzTRH5zQ6kw8rZ7Ey4Dupber0cggPsZBgikEgPZxUoUmIhWzTZfmBVjCw9G1RYvnhQXLOkcMpH4QTBW8JfoLOdvtNmFw6vEgdqqgkmDrlm1k_GR4VmzxwVKxEiStB7LwcTR22Ap_QhJff8eVbPknTydx5JGR0NQnli1',
    },
} as AxiosRequestConfig

const MiDataService = axios.create(config)

export const getObservations = async (): Promise<Observation> => {
    const response = await MiDataService.get<Observation>('/fhir/Observation')
    return response.data
}
