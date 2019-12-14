// @flow
import './styles.css'
import './utils.css'
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import FlipCard from './components/flip-card/FlipCard'
import WeatherWidget from './components/weather-widget/WeatherWidget'
import LocationMap from './components/location-map/LocationMap'

export interface ILocation {
    latitude: string,
    longitude: string,
}

function App() {

    const [location, setLocation] = useState<ILocation | null>(null)

    const handleWatchPositionSuccess = (position: Position) => {
        console.log('CURRENT POSITION -->', position.coords)
        setLocation(position.coords)
    }

    const handleWatchPositionError = (error: PositionError) => {
        console.error('GEOLOCATION ERROR -->', error.message)
    }

    const getCurrentLocation = () => {
        const GEOLOCATION_OPTIONS: PositionOptions = {enableHighAccuracy: 700, maximumAge: 300000, timeout: 270000}
        if (navigator.geolocation) {
            // TODO USE WATCH WITH REFRESH TIME SPECIFIED
            navigator.geolocation.getCurrentPosition(handleWatchPositionSuccess, handleWatchPositionError, GEOLOCATION_OPTIONS)
        } else {
            console.error('GEOLOCATION NOT SUPPORTED!')
        }
    }

    useEffect(() => {
        // GET LOCATION
        getCurrentLocation()
    }, [])

    return (
        <div className="App">
            <FlipCard
                frontComponent={<WeatherWidget location={location}/>}
                backComponent={<LocationMap currentLocation={location}/>}
            />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
