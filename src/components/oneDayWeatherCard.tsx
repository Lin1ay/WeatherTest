import React, { FC } from 'react'
import { dateFormatter } from '../utils/dateFormatter'

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

const oneDayWeatherCard: FC<props> = (props) => {
    const weekday = new Date(props.data.cardDayWeek * 1000).toLocaleDateString(
        'ru-RU',
        {
            weekday: 'long',
        }
    )
    return (
        <div key={props.data.date} className="week__day-temp">
            <span className="week__day-title">{weekday}</span>
            <span className="week__day-weekday">
                {dateFormatter(props.data.cardDayWeek)}
            </span>
            <span>
                <img
                    className="week__day-icon"
                    src={`/images/${props.data.cardIcon}.svg`}
                    alt="weather_icon"
                />
            </span>
            <span>Днем: {props.data.tempMax}°</span>
            <span>Ночью: {props.data.tempMin}°</span>
            <span>Ветер: {props.data.windMaxSpeed} мс/с</span>
        </div>
    )
}

export default oneDayWeatherCard
