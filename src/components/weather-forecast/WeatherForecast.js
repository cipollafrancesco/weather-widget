// @flow
import React, {useState} from 'react'
import './WeatherForecast.css'
import type {IWeatherBitResponse, IWeatherBitResponseData} from '../../services/weather-services.types'
import WeatherForecastItem from './components/weather-forecast-item/WeatherForecastItem'

interface IWeatherForecastProps {
    forecastWeatherData: IWeatherBitResponse,
    isFetchInPending: boolean,
    setCurrentWeatherData: (itemIndex: number) => void
}

/* LOCATION WITH ICON */
const WeatherForecast = (props: IWeatherForecastProps) => {

    const {forecastWeatherData} = props
    const [currentForecastItem, setCurrentForecastItem] = useState(0)

    // GETS ARRAY OF WEATHER INFOS
    const forecastData = forecastWeatherData ? forecastWeatherData.data : []

    /**
     * @description
     * 1) Sets the item as selected in forecast list
     * 2) Sets the current weather item data
     */
    const handleForecastItemClick = (itemIndex: number) => event => {
        event.stopPropagation()
        setCurrentForecastItem(itemIndex)
        props.setCurrentWeatherData(!itemIndex ? null : forecastData[itemIndex])
    }

    return (
        <div className="weather-forecast_container">
            {
                !!forecastData.length ?
                    forecastData.map(({datetime, max_temp, min_temp, weather}: IWeatherBitResponseData, index: number) =>
                        <WeatherForecastItem key={`forecast_${index}`}
                                             date={datetime}
                                             maxTemp={max_temp}
                                             minTemp={min_temp}
                                             weatherCode={weather.code}
                                             current={currentForecastItem === index}
                                             onClick={handleForecastItemClick(index)}
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
