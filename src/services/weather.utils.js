//@flow
import type {IWeatherBitResponse, IWeatherCurrentData} from './weather-services.types'

// RITORNA I DATI DEL METEO DI OGGI
export const currentWeatherDataSelector = (weatherData: IWeatherBitResponse | null): IWeatherCurrentData =>
    weatherData && Array.isArray(weatherData.data) && weatherData.data[0]