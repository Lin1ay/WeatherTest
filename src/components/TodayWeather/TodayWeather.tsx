import React, { FC } from 'react'
import Clock from '../Clock/Clock'
import { useSelector } from 'react-redux'
import '../TodayWeather/TodayWeather.scss'
import { store } from '../../store/store'

const MainTodayWeatherFrame: FC = () => {
    const state = useSelector(store.getState)
    const theme = state.theme
    const str = state.weather.list[0].weather[0].description || ' '
    const newStr = str[0].toUpperCase() + str.slice(1)
    return (
        <div className={`today__main ${theme}`}>
            <div className="main-city">{state.weather.city.name}</div>
            <div className="main-time">
                <Clock timeZone={state.weather.city.timezone} />
            </div>
            <div className="main__first-group">
                <div className="main__temp">
                    {Math.round(state.weather.list[0].main.temp)}°
                </div>
                <div className="weather__icon">
                    <img
                        src={`/images/${state.weather.list[0].weather[0].icon}.svg`}
                        alt="weather_icon"
                        height="110px"
                    />
                </div>
            </div>
            <div className="today__description">{newStr}</div>
            <div className="main__second-group">
                <div />
            </div>
        </div>
    )
}

export default MainTodayWeatherFrame
