//@flow
export const stringifyQueryParams = (queryParameters: any): string =>
    queryParameters ?
        Object.keys(queryParameters).reduce((agg: string, key: string) => {
            return queryParameters[key] !== undefined ? `${agg}${key}=${queryParameters[key]}&` : agg
        }, '?').replace(/&$/, '') : ''


export const MAP_DAY_NUMBER_TO_STRING = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
}