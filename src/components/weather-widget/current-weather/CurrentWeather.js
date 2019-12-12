// @flow
import React from 'react'
import './CurrentWeather.css'
import Rainy from '../../../assets/Rainy.svg'
import type {IWeatherCurrentData} from '../../../services/weather-widget.types'

// TODO ESTERNALIZZARE
export const WEATHER_CONDITIONS = {
    RAINY: 'Rainy'
}

// TODO ESTERNALIZZARE
export const MAP_WEATHER_CONDITIONS_TO_ICON = {
    [WEATHER_CONDITIONS.RAINY]: Rainy
}

interface ICurrentWeatherProps {
    currentWeatherData: IWeatherCurrentData
}

/* LOCATION WITH ICON */
const CurrentWeather = (props: ICurrentWeatherProps) => {

    const {currentWeatherData} = props

    return (
        <div className="current-weather_container">
            {/* CURRENT CONDITION ICON */}
            <img src={MAP_WEATHER_CONDITIONS_TO_ICON[WEATHER_CONDITIONS.RAINY]}
                 height={130}
                 alt={WEATHER_CONDITIONS.RAINY}/>
            {/* CURRENT TEMPERATURE */}
            <span className="current-weather-temperature_value">{currentWeatherData.temp}°</span>

            {/* CURRENT FEELS LIKE */}
            <span className="current-weather_extra-info">Feels like: {currentWeatherData.app_temp}°</span>

            {/* CURRENT HUMIDITY */}
            <span className="current-weather_extra-info"> Humidity: {currentWeatherData.rh}%</span>
        </div>
    )
}

export default CurrentWeather
