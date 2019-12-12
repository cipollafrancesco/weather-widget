//@flow
import {stringifyQueryParams} from '../utils'

export const WEATHERBIT_API_KEY = '8723ee724f914d32b7a56f02f7b73eb3'
export const WEATHERBIT_SERVER_URL_FORECAST = 'https://api.weatherbit.io/v2.0/forecast/daily'
export const WEATHERBIT_SERVER_URL_CURRENT = 'https://api.weatherbit.io/v2.0/current'

export const MOCKABLE_SERVER_URL_FORECAST = 'http://demo0406688.mockable.io/v2.0/forecast/daily'
export const MOCKABLE_SERVER_URL_CURRENT = 'https://demo0406688.mockable.io/v2.0/current'

export async function fetchWeatherData(apiUrl: string = '', queryParams: any) {
    const stringifiedQP = stringifyQueryParams({key: WEATHERBIT_API_KEY, ...queryParams})
    const response = await fetch(`${apiUrl}${stringifiedQP}`)
    return await response.json()
}