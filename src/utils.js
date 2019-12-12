//@flow
export const stringifyQueryParams = (queryParameters: any): string =>
    queryParameters ?
        Object.keys(queryParameters).reduce((agg: string, key: string) => {
            return queryParameters[key] !== undefined ? `${agg}${key}=${queryParameters[key]}&` : agg
        }, '?').replace(/&$/, '') : ''


export const MAP_DAY_NUMBER_TO_STRING = {
    0: 'MON',
    1: 'TUE',
    2: 'WED',
    3: 'THU',
    4: 'FRI',
    5: 'SAT',
    6: 'SUN',
}