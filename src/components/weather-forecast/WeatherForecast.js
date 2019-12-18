// @flow
import React, {useState} from 'react'
import './WeatherForecast.css'
import WeatherForecastItem from './components/weather-forecast-item/WeatherForecastItem'
import type {IForecastWeatherNormalizedData} from '../../services/weather.utils'

interface IWeatherForecastProps {
    forecastWeatherData: IForecastWeatherNormalizedData[],
    isFetchInPending: boolean,
    setCurrentWeatherData: (itemIndex: number) => void
}

/* LOCATION WITH ICON */
const WeatherForecast = (props: IWeatherForecastProps) => {

    const {forecastWeatherData} = props
    const [currentForecastItem, setCurrentForecastItem] = useState(0)

    /**
     * @description
     * 1) Sets the item as selected in forecast list
     * 2) Sets the current weather item data
     */
    const handleForecastItemClick = (itemIndex: number) => event => {
        event.stopPropagation() // PREVENT CARD CLICK
        setCurrentForecastItem(itemIndex)
        props.setCurrentWeatherData(!itemIndex ? null : forecastWeatherData[itemIndex])
    }

    return (
        <div className="weather-forecast_container">
            {
                !!forecastWeatherData.length ?
                    forecastWeatherData.map((forecast: IForecastWeatherNormalizedData, index: number) =>
                        <WeatherForecastItem key={`forecast_${index}`}
                                             {...forecast}
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
