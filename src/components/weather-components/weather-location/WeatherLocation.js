import React from 'react'
import './WeatherLocation.css'
import PinIcon from '../../../assets/PinIcon.svg'

/* LOCATION WITH ICON */
const WeatherLocation = props => {
    return (
        <div className="location_container">
            <img
                className="location_icon"
                src={PinIcon}
                alt="position-marker"
            />
            <span className="location_label">Rome</span>
        </div>
    )
}

export default WeatherLocation
