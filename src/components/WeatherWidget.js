// @flow
import './WeatherWidget.css'
import React, {useEffect, useState} from 'react'
import WeatherLocation from './weather-location/WeatherLocation'
import CurrentWeather from './current-weather/CurrentWeather'
import type {ILocation} from '../index'
import type {IWeatherBitResponse, IWeatherCurrentData} from '../services/weather-services.types'
import {
    fetchWeatherData,
    MOCKABLE_SERVER_URL_CURRENT,
    MOCKABLE_SERVER_URL_FORECAST,
    WEATHERBIT_SERVER_URL_CURRENT,
    WEATHERBIT_SERVER_URL_FORECAST
} from '../services/weather.services'
import WeatherForecast from './weather-forecast/WeatherForecast'
import {currentWeatherDataSelector} from '../services/weather.utils'
import {isDevMode} from '../utils'

interface IWeatherWidgetProps {
    location: ILocation
}

const WeatherWidget = (props: IWeatherWidgetProps) => {

    const {location} = props

    // CURRENT WEATHER DATA
    const [currentWeatherData, setCurrentWeatherData] = useState<IWeatherCurrentData | null>(null)
    const [isFetchCurrentWeatherInPending, setFetchCurrentWeatherInPending] = useState<boolean>(false)

    // FORECAST DATA
    const [forecastWeatherData, setForecastWeatherData] = useState<IWeatherBitResponse | null>(null)
    const [isFetchForecastInPending, setFetchForecastInPending] = useState<boolean>(false)

    // CURRENTLY SELECTED FORECAST ITEM DATA
    const [selectedForecastWeatherItemData, setForecastWeatherItemData] = useState<IWeatherBitResponse | null>(null)

    // FETCH HANDLER ON LOCATION CHANGE
    useEffect(() => {
        if (location) {
            // COORDS
            const COORDINATES_QP = {lat: location.latitude, lon: location.longitude}

            // FETCH CURRENT WEATHER DATA
            fetchWeatherData(
                isDevMode() ? MOCKABLE_SERVER_URL_CURRENT : WEATHERBIT_SERVER_URL_CURRENT,
                {...COORDINATES_QP},
                setFetchCurrentWeatherInPending
            ).then(
                (resp: IWeatherBitResponse) => setCurrentWeatherData(currentWeatherDataSelector(resp)),
                _ => setFetchCurrentWeatherInPending(false)
            )

            // FETCH FORECAST WEATHER DATA
            fetchWeatherData(
                isDevMode() ? MOCKABLE_SERVER_URL_FORECAST : WEATHERBIT_SERVER_URL_FORECAST,
                {...COORDINATES_QP, days: 7},
                setFetchForecastInPending
            ).then(
                (resp: IWeatherBitResponse) => setForecastWeatherData(resp),
                _ => setFetchForecastInPending(false)
            )
        }
    }, [location])

    // CITY NAME TO DISPLAY
    const currentCityName = (currentWeatherData && currentWeatherData.city_name) || (forecastWeatherData && forecastWeatherData.city_name)

    return (
        <div className="weather-widget_container">

            {/* LOCATION */}
            <WeatherLocation cityName={currentCityName}
                             isFetchInPending={isFetchCurrentWeatherInPending}
            />

            {/* CURRENT INFO*/}
            <CurrentWeather currentWeatherData={selectedForecastWeatherItemData || currentWeatherData}
                            isFetchInPending={isFetchCurrentWeatherInPending}/>

            <span className="divider"/>

            {/* FORECAST (7 days) */}
            <WeatherForecast forecastWeatherData={forecastWeatherData}
                             isFetchInPending={isFetchForecastInPending}
                             setCurrentWeatherData={setForecastWeatherItemData}/>
        </div>
    )
}

export default WeatherWidget