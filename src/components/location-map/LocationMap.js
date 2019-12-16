// @flow
import React, {useEffect} from 'react'
import type {ILocation} from '../../index'
import './LocationMap.css'
import {addMarkerToMap, initializeMap} from './location-map.utils'

interface ILocationMapProps {
    currentLocation: ILocation
}

const MAP_ELEMENT_ID = 'map'
const LocationMap = (props: ILocationMapProps) => {

    const {currentLocation} = props

    useEffect(() => {
        if (currentLocation) {
            const map = initializeMap(MAP_ELEMENT_ID, currentLocation)
            const currentPositionMarker = addMarkerToMap(currentLocation, map)
        }
    }, [currentLocation])

    return (
        currentLocation ?
            <div id={MAP_ELEMENT_ID} className="map_container"/> :
            <div className="map_placeholder_container">
                <span className="map_placeholder">
                    Our astronauts are sending us your position!
                </span>
            </div>
    )
}

export default LocationMap