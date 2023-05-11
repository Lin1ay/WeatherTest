import { IOneDayTemp, IDailyForecast } from '../../types/types'
import { dateFormatter } from './dateFormatter'

function dailyForecastData(weatherData: IOneDayTemp[]) {
    const dailyForecast: IDailyForecast = {}
    weatherData.forEach((data) => {
        const forecastDate: string = dateFormatter(data.dt)
        !dailyForecast.hasOwnProperty(forecastDate)
            ? (dailyForecast[forecastDate] = [])
            : dailyForecast[forecastDate].push(data)
    })

    return dailyForecast
}
export default dailyForecastData
