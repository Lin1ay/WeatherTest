import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../store/store'
import { dateFormatter } from '../../utils/dateFormatter'
import '../OneDayWeatherCard/OneDayWeatherCard.scss'
interface props {
    data: {
        tempMax: number
        tempMin: number
        windMaxSpeed: number
        date: string
        cardDayWeek: number
        cardIcon: string
    }
}

const OneDayWeatherCard = (props: props) => {
    const state = useSelector(store.getState)
    const theme = state.theme
    const weekday = new Date(props.data.cardDayWeek * 1000).toLocaleDateString(
        'ru-RU',
        {
            weekday: 'long',
        }
    )
    const newStr = weekday[0].toUpperCase() + weekday.slice(1)
    return (
        <div key={props.data.date} className={`week__day--temp ${theme}`}>
            <div className="week__weekday">
                {`${newStr}, ${dateFormatter(props.data.cardDayWeek)}`}
            </div>

            <div className="day__weather">
                <img
                    className="week__day--icon"
                    src={`/images/${props.data.cardIcon}.svg`}
                    alt="weather_icon"
                />
                <div className="day__weather__temp">
                    <div className="day__weather--daytemp">
                        {props.data.tempMax}°
                    </div>
                    <div className="day__weather--nighttemp">
                        {props.data.tempMin}°
                    </div>
                </div>
                <div className="day__weather--info">
                    <div className="day__weather--wind">
                        {props.data.windMaxSpeed} мс/с
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneDayWeatherCard
