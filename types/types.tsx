export type IMain = {
    temp: number
    pressure: number
    feels_like: number
    humidity: number
    grnd_level: number
    temp_max: number
    temp_min: number
}

export type IWeather = {
    description: string
    icon: string
}

export type IWind = {
    deg: number
    speed: number
}

export interface IDailyForecast {
    [index: string]: ITemp[]
}

export interface ITemp {
    dt: number
    main: IMain
    weather: IWeather[]
    wind: IWind
}

export interface IDataMain {
    city: {
        coord: {
            lat: number
            lon: number
        }
        country: string
        id: number
        name: string
        sunrise: number
        sunset: number
        timezone: number
    }
    list: ITemp[]
}

export interface Map {
    [index: string]: ITemp[]
}
