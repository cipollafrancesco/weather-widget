//@flow

// CONVERTS OBJECT OF QUERY PARAMS IN STRING
export const stringifyQueryParams = (queryParameters: any): string =>
    queryParameters ?
        Object.keys(queryParameters).reduce((agg: string, key: string) => {
            return queryParameters[key] !== undefined ? `${agg}${key}=${queryParameters[key]}&` : agg
        }, '?').replace(/&$/, '') : ''

// MAPS DAY OF THE WEEK INDEX TO ITS NAME
export const MAP_DAY_NUMBER_TO_STRING = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
}

/**
 * GETS CURRENT USER POSITION (IF SUPPORTED)
 * @param successCallback
 * @param failureCallback
 * @param options
 */
export const getUserCurrentPosition = (successCallback, failureCallback, options: PositionOptions) => {
    if (navigator.geolocation) {
        // FUTURE: use watchPosition to get updates from position
        navigator.geolocation.getCurrentPosition(successCallback, failureCallback, {...options})
    } else {
        console.error('GEOLOCATION NOT SUPPORTED!')
    }
}

// TRUE -> DEV ENV | FALSE -> PROD ENV
export const isDevMode = (): boolean => !process.env.NODE_ENV || process.env.NODE_ENV === 'development'