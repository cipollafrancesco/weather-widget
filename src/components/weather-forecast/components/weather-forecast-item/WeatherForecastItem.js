//@flow
import React from 'react'
import './WeatherForecastItem.css'
import {MAP_DAY_NUMBER_TO_STRING} from '../../../../utils'
import {MAP_WEATHER_CONDITIONS_TO_ICON} from '../../../../services/weather-widget.types'
import {MAP_WEATHER_CODE_TO_TYPE} from '../../../../services/weather-codes.mapper'

interface IWeatherForecastItemProps {
    minTemp: number,
    maxTemp: number,
    date: string,
    weatherCode?: string,
    current?: boolean
}

const WeatherForecastItem = (props: IWeatherForecastItemProps) => {

    const forecastDate = new Date(props.date)

    const dayOfTheWeek = MAP_DAY_NUMBER_TO_STRING[forecastDate.getDay()]
    const monthDay = forecastDate.getDate()

    const weatherType = props.weatherCode && MAP_WEATHER_CODE_TO_TYPE[props.weatherCode]
    const weatherIcon = weatherType && MAP_WEATHER_CONDITIONS_TO_ICON[weatherType]

    return (
        // TODO CAPIRE PERCHE NON VA FIRST CHILD
        <div className={`weather-forecast-item ${props.current ? 'weather-forecast-item--selected' : ''}`}>

            {/* WEEK DATE - NUMBER */}
            <span className="weather-forecast-item_date">{dayOfTheWeek} {monthDay}</span>

            {/* WEATHER ICON */}
            {
                weatherIcon &&
                <img src={weatherIcon}
                     className="weather-forecast-item_icon"
                     alt={weatherType}/>
            }

            {/* MAX TEMP - MIN TEMP */}
            {/* TODO CONTROLLI */}
            <span
                className="weather-forecast-item_temperature">{props.maxTemp.toFixed()}° - {props.minTemp.toFixed()}°</span>
        </div>
    )
}

export default WeatherForecastItem