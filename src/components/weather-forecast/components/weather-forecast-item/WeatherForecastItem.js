//@flow
import React from 'react'
import './WeatherForecastItem.css'
import {MAP_DAY_NUMBER_TO_STRING} from '../../../../utils'
import {MAP_WEATHER_CONDITIONS_TO_ICON} from '../../../../services/weather-services.types'
import {MAP_WEATHER_CODE_TO_TYPE} from '../../../../services/weather-codes.mapper'

interface IWeatherForecastItemProps {
    minTemp: number,
    maxTemp: number,
    weatherDescription: string,
    date: Date,
    weatherCode?: string,
    current?: boolean,
    onClick?: (event: any) => any
}

const WeatherForecastItem = (props: IWeatherForecastItemProps) => {

    const {onClick, weatherDescription, date} = props

    const dayOfTheWeek = date ? MAP_DAY_NUMBER_TO_STRING[date.getDay()] : ''
    const monthDay = date ? date.getDate() : ''

    const weatherType = props.weatherCode && MAP_WEATHER_CODE_TO_TYPE[props.weatherCode]
    const weatherIcon = weatherType && MAP_WEATHER_CONDITIONS_TO_ICON[weatherType]

    return (
        <div className={`weather-forecast-item ${props.current ? 'weather-forecast-item--selected' : ''}`}
             onClick={onClick}>

            {/* WEEK DATE - NUMBER */}
            <span className="weather-forecast-item_date">{dayOfTheWeek} {monthDay}</span>

            {/* WEATHER ICON */}
            {
                weatherIcon &&
                <img src={weatherIcon}
                     className="weather-forecast-item_icon"
                     title={weatherDescription}
                     alt={weatherType}/>
            }

            {/* MAX TEMP - MIN TEMP */}
            <span
                className="weather-forecast-item_temperature">
                {/* MAX TEMPERATURE */}
                {props.maxTemp ? `${props.maxTemp.toFixed()}°` : ''}

                {/* SEPARATOR */}
                {props.minTemp ? '-' : ''}

                {/* MIN TEMPERATURE */}
                {props.minTemp ? `${props.minTemp.toFixed()}°` : ''}
            </span>
        </div>
    )
}

export default WeatherForecastItem