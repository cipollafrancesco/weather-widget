//@flow
import React from 'react'
import './WeatherForecastItem.css'
import {MAP_WEATHER_CONDITIONS_TO_ICON, WEATHER_CONDITIONS} from '../../../current-weather/CurrentWeather'
import {MAP_DAY_NUMBER_TO_STRING} from '../../../../../utils'

interface IWeatherForecastItemProps {
    minTemp: number,
    maxTemp: number,
    date: string,
    iconType?: string,
}

const WeatherForecastItem = (props: IWeatherForecastItemProps) => {

    const forecastDate = new Date(props.date)

    const dayOfTheWeek = MAP_DAY_NUMBER_TO_STRING[forecastDate.getDay()]
    const monthDay = forecastDate.getDate()

    console.log('forecastDate === new Date()', forecastDate)

    return (
        <div
            className={`weather-forecast-item ${forecastDate === new Date() ? 'weather-forecast-item--selected' : ''}`}>
            {/* WEEK DATE - NUMBER */}
            <span className="weather-forecast-item_date">{dayOfTheWeek} {monthDay}</span>

            {/* WEATHER ICON */}
            <img src={MAP_WEATHER_CONDITIONS_TO_ICON[WEATHER_CONDITIONS.RAINY]}
                 className="weather-forecast-item_icon"
                 alt={WEATHER_CONDITIONS.RAINY}/>

            {/* MAX TEMP - MIN TEMP */}
            {/* TODO CONTROLLI */}
            <span
                className="weather-forecast-item_temperature">{props.maxTemp.toFixed()}° - {props.minTemp.toFixed()}°</span>
        </div>
    )
}

export default WeatherForecastItem