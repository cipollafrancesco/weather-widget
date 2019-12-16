// @flow
import './WeatherWidget.css'
import React, {useEffect, useState} from 'react'
import WeatherLocation from './weather-location/WeatherLocation'
import CurrentWeather from './current-weather/CurrentWeather'
import type {ILocation} from '../index'
import type {IWeatherBitResponse, IWeatherBitResponseData, IWeatherCurrentData} from '../services/weather-widget.types'
import {
    fetchWeatherData,
    MOCKABLE_SERVER_URL_CURRENT,
    MOCKABLE_SERVER_URL_FORECAST,
    WEATHERBIT_SERVER_URL_CURRENT, WEATHERBIT_SERVER_URL_FORECAST
} from '../services/weather.services'
import WeatherForecast from './weather-forecast/WeatherForecast'

interface IWeatherWidgetProps {
    location: ILocation
}

const WeatherWidget = (props: IWeatherWidgetProps) => {

    const {location} = props

    const [currentWeatherData, setCurrentWeatherData] = useState<IWeatherCurrentData | null>(null)
    const [isFetchCurrentWeatherInPending, setFetchCurrentWeatherInPending] = useState<boolean>(false)

    const [currentForecastWeatherData, setCurrentForecastWeatherData] = useState<IWeatherBitResponseData[] | null>(null)
    const [isFetchForecastInPending, setFetchForecastInPending] = useState<boolean>(false)

    useEffect(() => {
        if (location) {

            const COORDINATES_QP = {lat: location.latitude, lon: location.longitude}

            // FETCH CURRENT WEATHER DATA
            fetchWeatherData(WEATHERBIT_SERVER_URL_CURRENT, {...COORDINATES_QP}, setFetchCurrentWeatherInPending)
                .then(
                    (response: IWeatherBitResponse) => setCurrentWeatherData(currentWeatherDataSelector(response)),
                    (error) => {console.error('ERROR IN FETCH CALL!')}
                )

            // FETCH FORECAST WEATHER DATA
            fetchWeatherData(WEATHERBIT_SERVER_URL_FORECAST, {...COORDINATES_QP, days: 7}, setFetchForecastInPending)
                .then(
                    (response: IWeatherBitResponse) => setCurrentForecastWeatherData(response.data),
                    (error) => {
                        console.error('ERROR IN FETCH CALL!')
                        setFetchForecastInPending(false)
                    }
                )
        }
    }, [location])

    // RITORNA I DATI DEL METEO DI OGGI
    const currentWeatherDataSelector = (weatherData: IWeatherBitResponse | null): IWeatherCurrentData =>
        weatherData && Array.isArray(weatherData.data) && weatherData.data[0]

    return (
        <div className="weather-widget_container">

            {/* LOCATION */}
            <WeatherLocation cityName={currentWeatherData && currentWeatherData.city_name}
                             isFetchInPending={isFetchCurrentWeatherInPending}
            />

            {/* CURRENT INFO*/}
            <CurrentWeather currentWeatherData={currentWeatherData}
                            isFetchInPending={isFetchCurrentWeatherInPending}/>

            <hr className="divider"/>

            {/* FORECAST (7 days) */}
            <WeatherForecast forecastWeatherData={currentForecastWeatherData}
                             isFetchInPending={isFetchForecastInPending}/>
        </div>
    )
}

export default WeatherWidget