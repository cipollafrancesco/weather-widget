// @flow
import './styles.css'
import './utils.css'
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import FlipCard from './components/flip-card/FlipCard'
import WeatherWidget from './components/weather-widget/WeatherWidget'

export interface ILocation {
    latitude: string,
    longitude: string,
}

function App() {

    const [location, setLocation] = useState<ILocation | null>(null)

    useEffect(() => {
        navigator.geolocation ?
            navigator.geolocation.watchPosition(
                position => setLocation(position),
                error => console.error(error),
                {enableHighAccuracy: 700, maximumAge: 30000, timeout: 27000}
            ) : console.error('POSITION NOT SUPPORTED!')
    }, [])

    return (
        <div className="App">
            <FlipCard
                frontComponent={<WeatherWidget location={location}/>}
                backComponent={<span>RETRO</span>}
            />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
