import React, { FC } from 'react'
import { IDataMain } from '../../types/types'
import Clock from './clock'
import { useSelector } from 'react-redux'

interface ICounter {
    counter: IDataMain
}

const MainTodayWeatherFrame: FC = () => {
    const dataWeather = useSelector((state: ICounter) => state.counter)
    const theme = useSelector((state: any) => state.theme)
    return (
        <div className={`today__main ${theme}`}>
            <div className="main__first-group">
                <div>
                    <div className="main__temp">
                        {Math.round(dataWeather.list[0].main.temp)}°
                    </div>
                    <div className="main-title">СЕЙЧАС </div>
                    <div className="main-weather-icon">
                        {dataWeather.list[0].weather[0].description}
                    </div>
                </div>
                <div className="main-icon">
                    <img
                        className="weather__icon"
                        src={`/images/${dataWeather.list[0].weather[0].icon}.svg`}
                        alt="weather_icon"
                    />
                </div>
            </div>
            <div className="main__second-group">
                <div className="main-time">
                    <Clock timeZone={dataWeather.city.timezone} />
                </div>
                <div className="main-city">Город: {dataWeather.city.name}</div>
                <div />
            </div>
        </div>
    )
}

export default MainTodayWeatherFrame
