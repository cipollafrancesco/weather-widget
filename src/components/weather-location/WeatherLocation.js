// @flow
import React from 'react'
import './WeatherLocation.css'

interface IWeatherLocationProps {
    cityName: string,
    isFetchInPending: boolean
}

/* LOCATION WITH ICON */
const WeatherLocation = (props: IWeatherLocationProps) => {
    return (
        <div className="location_container">
            <img
                className="location_icon"
                src="/assets/PinIcon.svg"
                alt="position-marker"
            />
            <span className="location_label">
                {props.isFetchInPending ? 'Getting location...' : (props.cityName || 'Your location')}
            </span>
        </div>
    )
}

export default WeatherLocation
