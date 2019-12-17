// @flow
import './styles.css'
import './utils.css'
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import FlipCard from './components/flip-card/FlipCard'
import WeatherWidget from './components/WeatherWidget'
import LocationMap from './components/location-map/LocationMap'
import {getUserCurrentPosition} from './utils'

export interface ILocation {
    latitude: string,
    longitude: string,
}

function App() {

    // CURRENT USER LOCATION
    const [location, setLocation] = useState<ILocation | null>(null)

    // DID MOUNT
    useEffect(() => {
        // GET LOCATION
        getUserCurrentPosition(
            (position: Position) => setLocation(position.coords),
            (error: PositionError) => console.error('GEOLOCATION ERROR -->', error.message),
            {enableHighAccuracy: 300, maximumAge: 3000, timeout: 50000}
        )
    }, [])

    return (
        <div className="App">
            {/* CONTAINER */}
            <div style={{width: 800, height: 593}}>
                {/* WEATHER FLIP CARD */}
                <FlipCard frontComponent={<WeatherWidget location={location}/>}
                          backComponent={<LocationMap currentLocation={location}/>}
                />
            </div>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
