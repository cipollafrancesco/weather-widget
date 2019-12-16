// @flow
import React from 'react'
import './CurrentWeather.css'
import type {IWeatherCurrentData} from '../../services/weather-widget.types'
import {MAP_WEATHER_CONDITIONS_TO_ICON} from '../../services/weather-widget.types'
import {MAP_WEATHER_CODE_TO_TYPE} from '../../services/weather-codes.mapper'

interface ICurrentWeatherProps {
    currentWeatherData: IWeatherCurrentData,
    isFetchInPending: boolean
}

/* LOCATION WITH ICON */
const CurrentWeather = (props: ICurrentWeatherProps) => {

    const {currentWeatherData, isFetchInPending} = props

    const weatherType = props.currentWeatherData &&
        MAP_WEATHER_CODE_TO_TYPE[props.currentWeatherData.weather.code]

    const weatherIcon = weatherType && MAP_WEATHER_CONDITIONS_TO_ICON[weatherType]

    return (
        !isFetchInPending &&
        <>
            <div className="current-weather_container">
                {

                    currentWeatherData ?
                        <>
                            {/* CURRENT CONDITION ICON */}
                            <img src={weatherIcon} height={130} alt={weatherType}/>

                            {/* CURRENT TEMPERATURE */}
                            {currentWeatherData.temp &&
                            <span
                                className="current-weather-temperature_value">{currentWeatherData.temp.toFixed()}°</span>}

                            {/* CURRENT FEELS LIKE */}
                            {currentWeatherData.app_temp &&
                            <span
                                className="current-weather_extra-info">Feels like: {currentWeatherData.app_temp.toFixed()}°</span>}

                            {/* CURRENT HUMIDITY */}
                            {currentWeatherData.rh &&
                            <span
                                className="current-weather_extra-info"> Humidity: {currentWeatherData.rh.toFixed()}%</span>}
                        </>
                        // ERROR MESSAGE
                        : <span className="current-weather_extra-info"> Ops! We're sorry but something went wrong</span>
                }
            </div>
        </>
    )
}

export default CurrentWeather
