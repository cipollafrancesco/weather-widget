// @flow
import React from 'react'
import './CurrentWeather.css'
import type {IWeatherCurrentData} from '../../../services/weather-widget.types'
import {MAP_WEATHER_CONDITIONS_TO_ICON, WEATHER_CONDITIONS} from '../../../services/weather-widget.types'

interface ICurrentWeatherProps {
    currentWeatherData: IWeatherCurrentData,
    isFetchInPending: boolean
}

/* LOCATION WITH ICON */
const CurrentWeather = (props: ICurrentWeatherProps) => {

    const {currentWeatherData, isFetchInPending} = props

    return (
        !isFetchInPending &&
        <>
            <div className="current-weather_container">
                {

                    currentWeatherData ?
                        <>
                            {/* CURRENT CONDITION ICON */}
                            <img src={MAP_WEATHER_CONDITIONS_TO_ICON[WEATHER_CONDITIONS.RAINY]}
                                 height={130}
                                 alt={WEATHER_CONDITIONS.RAINY}/>

                            {/* CURRENT TEMPERATURE */}
                            {currentWeatherData.temp &&
                            <span className="current-weather-temperature_value">{currentWeatherData.temp}°</span>}

                            {/* CURRENT FEELS LIKE */}
                            {currentWeatherData.app_temp &&
                            <span
                                className="current-weather_extra-info">Feels like: {currentWeatherData.app_temp}°</span>}

                            {/* CURRENT HUMIDITY */}
                            {currentWeatherData.rh &&
                            <span className="current-weather_extra-info"> Humidity: {currentWeatherData.rh}%</span>}
                        </>
                        // ERROR MESSAGE
                        : <span className="current-weather_extra-info"> Ops! We're sorry but something went wrong</span>
                }
            </div>
        </>
    )
}

export default CurrentWeather
