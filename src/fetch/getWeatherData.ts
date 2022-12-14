import axios from 'axios'
import { IDataMain } from '../../types/types'

export async function getWeatherData(city: string): Promise<IDataMain> {
    const response = await axios.get<IDataMain>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
    return response.data
}

export default getWeatherData
