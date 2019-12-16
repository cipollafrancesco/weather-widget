// @flow
import React from 'react'
import './WeatherForecast.css'
import type {IWeatherBitResponseData} from '../../../services/weather-widget.types'
import WeatherForecastItem from './components/weather-forecast-item/WeatherForecastItem'

interface IWeatherForecastProps {
    forecastWeatherData: IWeatherBitResponseData[],
    isFetchInPending: boolean,
}

/* LOCATION WITH ICON */
const WeatherForecast = (props: IWeatherForecastProps) => {

    const {forecastWeatherData} = props

    return (
        <div className="weather-forecast_container">
            {
                Array.isArray(forecastWeatherData) ?
                    forecastWeatherData.map(({datetime, max_temp, min_temp, weather}: IWeatherBitResponseData, index: number) =>
                        <WeatherForecastItem key={`forecast_${index}`}
                                             date={datetime}
                                             maxTemp={max_temp}
                                             minTemp={min_temp}
                                             weatherCode={weather.code}
                                             current={!index}
                        />
                    ) :
                    <span className="weather-forecast_placeholder">
                        {
                            props.isFetchInPending ?
                                'Our meteorologist is retrieving your infos...' :
                                'Could not retrieve data, please try again later!'
                        }
                    </span>
            }
        </div>
    )
}

export default WeatherForecast
