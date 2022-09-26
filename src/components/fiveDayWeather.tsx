import React, { FC, useMemo } from 'react'
import '../../src/styles/index.scss'
import OneDayWeatherCard from '../components/oneDayWeatherCard'
import { useSelector } from 'react-redux'
import { IDataMain } from '../../types/types'
import dailyForecastData from '../utils/dailyForecast'
import badWeather from '../utils/badWeather'

interface ICounter {
    counter: IDataMain
}

const TodayCardWeather: FC = () => {
    const dataWeather = useSelector((state: ICounter) => state.counter)

    const dailyForecast = useMemo(() => {
        return dailyForecastData(dataWeather.list)
    }, [dataWeather])

    const keys: string[] = useMemo(() => {
        return Object.keys(dailyForecast)
    }, [dailyForecast])

    const newCardMaxTemp: number[] = []
    const newCardMinTemp: number[] = []
    const newCardWindSpeed: number[] = []
    const newDayWeek: number[] = []
    const newWeatherIcon: string[] = []

    Object.values(dailyForecast).forEach((values) => {
        const minTemp: number[] = values.map((val) => {
            return Math.round(val.main.temp_min)
        })
        newCardMinTemp.push(Math.min(...minTemp))

        const maxTemp: number[] = values.map((val) => {
            return Math.round(val.main.temp_max)
        })
        newCardMaxTemp.push(Math.max(...maxTemp))

        const nowWindSpeed: number[] = values.map((val) => {
            return Math.round(val.wind.speed)
        })
        newCardWindSpeed.push(Math.max(...nowWindSpeed))

        const nowCardDayWeek: number[] = values.map((val) => {
            return Math.round(val.dt)
        })
        newDayWeek.push(Math.max(...nowCardDayWeek))

        const nowWeatherIcon: string[] = values.map((val) => {
            return val.weather[0].icon
        })
        const icon = badWeather(nowWeatherIcon)
        newWeatherIcon.push(icon)
    })
    const dataWeatherFor = keys.map((date, index) => ({
        tempMax: newCardMaxTemp[index],
        tempMin: newCardMinTemp[index],
        windMaxSpeed: newCardWindSpeed[index],
        cardDayWeek: newDayWeek[index],
        cardIcon: newWeatherIcon[index],
        date: date,
    }))

    return (
        <div className="week__temp">
            {dataWeatherFor
                .slice(1)
                .map(
                    ({
                        tempMax,
                        tempMin,
                        windMaxSpeed,
                        cardDayWeek,
                        cardIcon,
                        date,
                    }) => {
                        return (
                            <OneDayWeatherCard
                                key={date}
                                data={{
                                    tempMax,
                                    tempMin,
                                    windMaxSpeed,
                                    cardDayWeek,
                                    cardIcon,
                                    date,
                                }}
                            />
                        )
                    }
                )}
        </div>
    )
}

export default TodayCardWeather
