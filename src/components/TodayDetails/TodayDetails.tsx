import React, { FC, useMemo } from 'react'
import degToCompass from '../../utils/compass'
import pressureConverter from '../../utils/pressureConverter'
import { useSelector } from 'react-redux'
import '../TodayDetails/TodayDetails.scss'
import { store } from '../../store/store'

const DetailsTodayWeatherFrame: FC = () => {
    const state = useSelector(store.getState)

    const theme = state.theme
    const Arrow: string = state.weather.list[0].wind.deg.toString()
    const Compass = useMemo(() => {
        return degToCompass(state.weather.list[0].wind.deg)
    }, [state.weather])
    return (
        <div className={`today__details ${theme}`}>
            <div className="details">
                <div className={`details__round ${theme}`}>
                    <img
                        className="details__icon"
                        src="/images/temp.svg"
                        alt="temp_logo"
                    />
                </div>

                <div className={`details__text ${theme}`}>
                    По ощущениям{' '}
                    {Math.round(state.weather.list[0].main.feels_like)}°
                </div>
            </div>
            <div className="details">
                <div className={`details__round ${theme}`}>
                    <img
                        className="details__icon"
                        src="/images/humidity.svg"
                        alt="humidity_logo"
                    />
                </div>

                <div className={`details__text ${theme}`}>
                    {Math.round(state.weather.list[0].main.humidity)}%
                </div>
            </div>
            <div className="details">
                <div className={`details__round ${theme}`}>
                    <img
                        className="details__icon"
                        src="/images/pressure.svg"
                        alt="pressure_logo"
                    />
                </div>

                <div className={`details__text ${theme}`}>
                    {pressureConverter(
                        Math.round(state.weather.list[0].main.grnd_level)
                    )}{' '}
                    мм рт.ст.
                </div>
            </div>
            <div className="details">
                <div className={`details__round ${theme}`}>
                    <img
                        className="details__icon"
                        src="/images/wind.svg"
                        alt="wind_logo"
                    />
                </div>

                <div className={`details__text ${theme}`}>
                    {Math.round(state.weather.list[0].wind.speed)} м/c,{' '}
                    {Compass}
                </div>
                <div className="arrow">
                    <img
                        className="arrow"
                        src="/images/rose.svg"
                        alt="123"
                        style={{
                            transform: `rotate(${Arrow}deg)`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailsTodayWeatherFrame
