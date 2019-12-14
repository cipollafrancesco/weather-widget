// @flow
import React, {useEffect} from 'react'
import type {ILocation} from '../../index'
import './LocationMap.css'

interface ILocationMapProps {
    currentLocation: ILocation
}

const MAP_ELEMENT_ID = 'map'
const LocationMap = (props: ILocationMapProps) => {

    const {currentLocation} = props

    const initMap = (location: ILocation) => {
        const googleMaps = window.google && window.google.maps
        const Map = googleMaps && googleMaps.Map
        const Marker = googleMaps && googleMaps.Maker

        const markerLocation = {lat: location.latitude, lng: location.longitude}

        const map = Map && new Map(document.getElementById(MAP_ELEMENT_ID), {center: {...markerLocation}, zoom: 8})
        const currentPositionMarker = Marker && new Marker({position: {...markerLocation}, map: map})
    }

    useEffect(() => {
        currentLocation && initMap(currentLocation)
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