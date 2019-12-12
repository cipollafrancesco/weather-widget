// @flow
import './WeatherWidget.css'
import React, {useEffect, useState} from 'react'
import WeatherLocation from './weather-location/WeatherLocation'
import CurrentWeather from './current-weather/CurrentWeather'
import type {ILocation} from '../../index'
import type {
    IWeatherBitResponse,
    IWeatherBitResponseData,
    IWeatherCurrentData
} from '../../services/weather-widget.types'
import {
    fetchWeatherData,
    MOCKABLE_SERVER_URL_CURRENT,
    MOCKABLE_SERVER_URL_FORECAST
} from '../../services/weather.services'
import WeatherForecast from './weather-forecast/WeatherForecast'

interface IWeatherWidgetProps {
    location: ILocation
}

const WeatherWidget = (props: IWeatherWidgetProps) => {

    const [currentWeatherData, setCurrentWeatherData] = useState<IWeatherCurrentData | null>(null)
    const [currentForecastWeatherData, setCurrentForecastWeatherData] = useState<IWeatherBitResponseData[] | null>(null)

    useEffect(() => {
        console.log('POSITION -->', props.location)

        const COORDINATES_QP = {lat: '38.25', lon: '-78.00'}

        // FETCH CURRENT WEATHER DATA
        fetchWeatherData(MOCKABLE_SERVER_URL_CURRENT, {...COORDINATES_QP})
            .then(
                (response: IWeatherBitResponse) => setCurrentWeatherData(currentWeatherDataSelector(response)),
                (error) => console.error('ERROR IN FETCH CALL!')
            )

        // FETCH FORECAST WEATHER DATA
        fetchWeatherData(MOCKABLE_SERVER_URL_FORECAST, {...COORDINATES_QP, days: 7})
            .then(
                (response: IWeatherBitResponse) => setCurrentForecastWeatherData(response.data),
                (error) => console.error('ERROR IN FETCH CALL!')
            )
    }, [])

    // RITORNA I DATI DEL METEO DI OGGI
    const currentWeatherDataSelector = (weatherData: IWeatherBitResponse | null): IWeatherCurrentData =>
        weatherData && Array.isArray(weatherData.data) && weatherData.data[0]

    return (
        currentWeatherData ?
            <div className="weather-widget_container">
                {/* LOCATION */}
                <WeatherLocation cityName={currentWeatherData.city_name}/>

                {/* CURRENT INFO*/}
                <CurrentWeather currentWeatherData={currentWeatherData}/>

                <hr className="divider"/>

                {/* FORECAST (7 days) */}
                <WeatherForecast forecastWeatherData={currentForecastWeatherData}/>
            </div>
            : <span>SPINNER</span>
    )
}

export default WeatherWidget