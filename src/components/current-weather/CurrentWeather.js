// @flow
import React from 'react'
import './CurrentWeather.css'
import {MAP_WEATHER_CONDITIONS_TO_ICON} from '../../services/weather-services.types'
import {MAP_WEATHER_CODE_TO_TYPE} from '../../services/weather-codes.mapper'

interface ICurrentWeatherProps {
    currentWeatherData: ICurrentWeatherNormalizedData,
    isFetchInPending: boolean
}

/* LOCATION WITH ICON */
const CurrentWeather = (props: ICurrentWeatherProps) => {

    const {currentWeatherData, isFetchInPending} = props

    const weatherType = props.currentWeatherData && MAP_WEATHER_CODE_TO_TYPE[currentWeatherData.weatherCode]
    const weatherIcon = weatherType && MAP_WEATHER_CONDITIONS_TO_ICON[weatherType]

    return (
        !isFetchInPending &&
        <>
            <div className="current-weather_container">
                {

                    currentWeatherData ?
                        <>
                            {/* CURRENT CONDITION ICON */}
                            <img src={weatherIcon}
                                 className="current-weather_icon"
                                 alt={weatherType}
                                 title={currentWeatherData.weatherDescription}
                            />

                            {/* CURRENT TEMPERATURE */}
                            <span className="current-weather-temperature_value">
                                {currentWeatherData.temp ? `${currentWeatherData.temp.toFixed()}°` : '-'}
                            </span>

                            {/* CURRENT FEELS LIKE */}
                            <span className="current-weather_extra-info">
                                Feels like: {currentWeatherData.app_temp ? `${currentWeatherData.app_temp.toFixed()}°` : '-'}
                            </span>

                            {/* CURRENT HUMIDITY */}
                            <span className="current-weather_extra-info">
                                Humidity: {currentWeatherData.rh ? `${currentWeatherData.rh.toFixed()}%` : '-'}
                            </span>
                        </>
                        // ERROR MESSAGE
                        : <span className="current-weather_extra-info"> Ops! We're sorry but something went wrong</span>
                }
            </div>
        </>
    )
}

export default CurrentWeather
