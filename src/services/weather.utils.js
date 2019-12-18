//@flow
import type {IWeatherBitResponse, IWeatherBitResponseData, IWeatherCurrentData} from './weather-services.types'

// RITORNA I DATI DEL METEO DI OGGI
export const currentWeatherDataSelector = (weatherData: IWeatherBitResponse | null): IWeatherCurrentData =>
    weatherData && Array.isArray(weatherData.data) && weatherData.data[0]

export interface ICurrentWeatherNormalizedData {
    weatherDescription: string,
    weatherCode: string,
    temp: number,
    app_temp: number,
    rh: number,
}

export const currentWeatherNormalizedDataSelector = (currentWeatherData: IWeatherCurrentData | null): ICurrentWeatherNormalizedData | null => {
    return currentWeatherData && ({
        weatherDescription: currentWeatherData.weather.description,
        weatherCode: currentWeatherData.weather.code,
        temp: currentWeatherData.temp,
        app_temp: currentWeatherData.app_temp,
        rh: currentWeatherData.rh,
    })
}

export interface IForecastWeatherNormalizedData {
    minTemp: number,
    temp: number,
    rh: number,
    maxTemp: number,
    weatherDescription: string,
    date: Date | null,
    weatherCode: string,
}

export const forecastWeatherNormalizedDataSelector = (forecastData: IWeatherBitResponse | null): IForecastWeatherNormalizedData[] | null => {
    return forecastData && Array.isArray(forecastData.data) ? forecastData.data.map((forecast: IWeatherBitResponseData) => ({
        temp: forecast.temp,
        rh: forecast.rh,
        minTemp: forecast.min_temp,
        maxTemp: forecast.max_temp,
        date: forecast.datetime ? new Date(forecast.datetime) : null,
        weatherDescription: forecast.weather.description,
        weatherCode: forecast.weather.code,
    })) : []
}