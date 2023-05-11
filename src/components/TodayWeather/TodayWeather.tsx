import React, { FC } from 'react'
import Clock from '../Clock/Clock'
import '../TodayWeather/TodayWeather.scss'
import { store } from '../../store/store'
import { useSelector } from 'react-redux'
import pressureConverter from '../../utils/pressureConverter'
import degToCompass from '../../utils/compass'

const MainTodayWeatherFrame: FC = () => {
    const state = useSelector(store.getState)
    const windDeg = state.weather.list[0].wind.deg
    const str = state.weather.list[0].weather[0].description || ' '
    const newStr = str[0].toUpperCase() + str.slice(1)
    return (
        <div className={`today ${state.theme}`}>
            <div className="main__time">
                <Clock timezone={state.weather.city.timezone} />
            </div>
            <div className="today__city">
                <div className="today__city__name">
                    {state.weather.city.name}
                </div>
                <div className="today__city__temp">
                    {Math.round(state.weather.list[0].main.temp)}°
                </div>
            </div>
            <div className="main__description">{`Сейчас: ${newStr}`}</div>

            <div className="main__weather__icon">
                <img
                    src={`/images/${state.weather.list[0].weather[0].icon}.svg`}
                    alt="weather_icon"
                    style={
                        window.screen.width < 1024
                            ? { height: '80px', width: '80px' }
                            : { height: '120px', width: '120px' }
                    }
                />
            </div>
            <div className="main__second-group"></div>
            <div className={`today__details ${state.theme}`}>
                <div className="details">
                    <div className={`details__text`}>{'По ощущениям:  '}</div>
                    <div className={`details__text`}>
                        <b>
                            {Math.round(state.weather.list[0].main.feels_like)}°
                        </b>
                    </div>
                </div>
                <div className="details">
                    <div className={`details__text`}>{'Влажность:  '}</div>
                    <div className={`details__text`}>
                        <b>
                            {Math.round(state.weather.list[0].main.humidity)}%
                        </b>
                    </div>
                </div>
                <div className="details">
                    <div className={`details__text`}>{'Давление:  '}</div>
                    <div className={`details__text`}>
                        <b>
                            {pressureConverter(
                                Math.round(
                                    state.weather.list[0].main.grnd_level
                                )
                            )}
                            мм рт.ст.
                        </b>
                    </div>
                </div>
                <div className="details">
                    <div className={`details__text`}>{'Ветер:  '}</div>
                    <div className={`details__text`}>
                        <b>
                            {Math.round(state.weather.list[0].wind.speed)} м/c,
                            {degToCompass(state.weather.list[0].wind.deg)}
                        </b>
                    </div>
                    <div className="arrow">
                        <img
                            src="/images/rose.svg"
                            alt="arrow"
                            style={{
                                transform: `rotate(${windDeg.toString()}deg)`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTodayWeatherFrame
