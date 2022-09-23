export const defaultWeatherData = {
    city: {
        coord: {
            lat: 0,
            lon: 0,
        },
        country: '',
        id: 0,
        name: '',
        sunrise: 0,
        sunset: 0,
        timezone: 0,
    },
    list: [
        {
            dt: 0,
            main: {
                temp: 0,
                pressure: 0,
                feels_like: 0,
                humidity: 0,
                grnd_level: 0,
                temp_max: 0,
                temp_min: 0,
            },
            weather: [
                {
                    description: '',
                    icon: '',
                },
            ],
            wind: {
                deg: 0,
                speed: 0,
            },
        },
    ],
}
