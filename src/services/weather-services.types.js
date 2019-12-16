import Rainy from '../assets/Rainy.svg'
import Snowy from '../assets/Snow.svg'
import Sunny from '../assets/Sun.svg'
import Cloudy from '../assets/Cloud.svg'

export interface IWeatherBitResponseDataWeather {
    icon: string,
    code: number,
    description: string,
}

export interface IWeatherBitResponseData {
    app_max_temp: number,
    app_min_temp: number,
    clouds: number,
    clouds_hi: number,
    clouds_low: number,
    clouds_mid: number,
    datetime: string,
    dewpt: number,
    high_temp: number,
    low_temp: number,
    max_dhi: string,
    max_temp: number,
    min_temp: number,
    moon_phase: number,
    moonrise_ts: number,
    moonset_ts: number,
    ozone: number,
    pop: number,
    precip: number,
    pres: number,
    rh: number,
    slp: number,
    snow: number,
    snow_depth: number,
    sunrise_ts: number,
    sunset_ts: number,
    temp: number,
    ts: number,
    uv: number,
    valid_date: string,
    vis: number,
    weather: IWeatherBitResponseDataWeather,
    wind_cdir: string,
    wind_cdir_full: string,
    wind_dir: number,
    wind_gust_spd: number,
    wind_spd: number,
}

export interface IWeatherBitResponse {
    city_name: string,
    country_code: string,
    data: IWeatherBitResponseData[],
    lat: number,
    lon: number,
    state_code: string,
    timezone: string,
}

export interface IWeatherCurrentData {
    app_temp: number,
    aqi: number,
    city_name: string,
    clouds: number,
    country_code: string,
    datetime: string,
    dewpt: number,
    dhi: number,
    dni: number,
    elev_angle: number,
    ghi: number,
    h_angle: number,
    last_ob_time: string,
    lat: number,
    lon: number,
    ob_time: string,
    pod: string,
    precip: number,
    pres: number,
    rh: number,
    slp: number,
    snow: number,
    solar_rad: number,
    state_code: string,
    station: string,
    sunrise: string,
    sunset: string,
    temp: number,
    timezone: string,
    ts: number,
    uv: number,
    vis: number,
    weather: IWeatherBitResponseDataWeather,
    wind_cdir: string,
    wind_cdir_full: string,
    wind_dir: number,
    wind_spd: number,
}

// MAPS TYPE OF WEATHER WITH ITS DESCRIPTION
export const WEATHER_CONDITIONS = {
    RAINY: 'Rainy',
    SNOWY: 'Snowy',
    SUNNY: 'Sunny',
    CLOUDY: 'Cloudy',
}

// MAPS TYPE OF WEATHER WITH THE RIGHT ICON
export const MAP_WEATHER_CONDITIONS_TO_ICON = {
    [WEATHER_CONDITIONS.RAINY]: Rainy,
    [WEATHER_CONDITIONS.SNOWY]: Snowy,
    [WEATHER_CONDITIONS.SUNNY]: Sunny,
    [WEATHER_CONDITIONS.CLOUDY]: Cloudy,
}