//@flow
import type {ILocation} from '../../index'
import {LOCATION_MAP_STYLE_CONFIG} from './location-map-style.config'

/**
 * @description INITIALIZE MAP
 * returns the map reference
 */
export const initializeMap = (mapElementId: string, location: ILocation) => {
    const googleMaps = window.google && window.google.maps
    const Map = googleMaps && googleMaps.Map

    // CURRENT MAP
    return Map && new Map(
        document.getElementById(mapElementId),
        {
            disableDefaultUI: true, // HIDES MAPS CONTROLS
            center: {lat: location.latitude, lng: location.longitude},
            zoom: 15,
            styles: LOCATION_MAP_STYLE_CONFIG
        }
    )
}

/**
 * @description ADD POSITION MARKER TO GIVEN MAP
 * returns the marker reference
 */
export const addMarkerToMap = (location: ILocation, map: any) => {
    const googleMaps = window.google && window.google.maps
    const Marker = googleMaps && googleMaps.Marker

    // CURRENT POSITION MARKER
    return Marker && new Marker({
        position: {lat: location.latitude, lng: location.longitude},
        map: map,
    })
}