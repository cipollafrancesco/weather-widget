// @flow
import React from 'react'
import './WeatherLocation.css'
import PinIcon from '../../../assets/PinIcon.png'

interface IWeatherLocationProps {
    cityName: string
}

/* LOCATION WITH ICON */
const WeatherLocation = (props: IWeatherLocationProps) => {
    return (
        <div className="location_container">
            <img
                className="location_icon"
                src={PinIcon}
                alt="position-marker"
            />
            <span className="location_label">{props.cityName || 'Your location'}</span>
        </div>
    )
}

export default WeatherLocation
