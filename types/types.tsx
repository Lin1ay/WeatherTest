export interface IWeatherData {
    cod: string
    message: number
    cnt: number
    list: IOneDayTemp[]
    city: ICityInfo
}

export interface IOneDayTemp {
    dt: number
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        sea_level: number
        grnd_level: number
        humidity: number
        temp_kf: number
    }
    weather: [
        {
            id: number
            main: string
            description: String
            icon: string
        }
    ]
    clouds: {
        all: number
    }
    wind: {
        speed: number
        deg: number
        gust: number
    }
    visibility: number
    pop: number
    sys: {
        pod: string
    }
    dt_txt: string
}
export interface ICityInfo {
    id: number
    name: string
    coord: {
        lat: number
        lon: number
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

export interface IDailyForecast {
    [index: string]: IOneDayTemp[]
}

export interface IStore {
    loader: boolean
    weather: IWeatherData
    theme: boolean
}
