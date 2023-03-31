import axios from 'axios'
import { IDataMain } from '../../types/types'

export async function getWeatherData(city: string) {
    const weatherData = await axios
        .get<IDataMain>(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => response.data)
        .catch((err) => console.log(err))
    return weatherData
}

export default getWeatherData
