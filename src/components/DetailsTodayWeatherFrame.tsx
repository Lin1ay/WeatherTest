import React, { FC, useMemo } from 'react'
import { IDataMain } from '../../types/types'
import degToCompass from '..//utils/compass'
import pressureConverter from '..//utils/pressureConverter'
import { useSelector } from 'react-redux'

interface ICounter {
    counter: IDataMain
}

const DetailsTodayWeatherFrame: FC = () => {
    const dataWeather = useSelector((state: ICounter) => state.counter)
    const theme = useSelector((state: any) => state.theme)
    const Arrow: string = dataWeather.list[0].wind.deg.toString()
    const Compass = useMemo(() => {
        return degToCompass(dataWeather.list[0].wind.deg)
    }, [dataWeather])
    return (
        <div className={`today__details ${theme}`}>
            <div className="details">
                <div className={`details__round ${theme}`}>
                    <img src="/images/temp.svg" alt="temp_logo" />
                </div>
                <div className={`details__title ${theme}`}>Температура</div>
                <div className={`details__text-temp ${theme}`}>
                    {Math.round(dataWeather.list[0].main.temp)}° - ощущается как{' '}
                    {Math.round(dataWeather.list[0].main.feels_like)}°
                </div>
            </div>

            <div className="details">
                <div className={`details__round ${theme}`}>
                    <img src="/images/humidity.svg" alt="humidity_logo" />
                </div>
                <div className={`details__title ${theme}`}>Влажность</div>
                <div className={`details__text ${theme}`}>
                    {Math.round(dataWeather.list[0].main.humidity)}%
                </div>
            </div>
            <div className="details">
                <div className={`details__round ${theme}`}>
                    <img src="/images/pressure.svg" alt="pressure_logo" />
                </div>
                <div className={`details__title ${theme}`}>
                    Атмосферное давление
                </div>
                <div className={`details__text ${theme}`}>
                    {pressureConverter(
                        Math.round(dataWeather.list[0].main.grnd_level)
                    )}{' '}
                    мм рт.ст.
                </div>
            </div>
            <div className="details">
                <div className={`details__round ${theme}`}>
                    <img src="/images/wind.svg" alt="wind_logo" />
                </div>
                <div className={`details__title ${theme}`}>Ветер</div>
                <div className={`details__text ${theme}`}>
                    {Math.round(dataWeather.list[0].wind.speed)} м/c,
                    направление {Compass}
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
