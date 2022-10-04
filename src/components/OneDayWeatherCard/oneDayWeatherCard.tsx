import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
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
    const theme = useSelector<props, RootState>((state: any) => state.theme)
    const weekday = new Date(props.data.cardDayWeek * 1000).toLocaleDateString(
        'ru-RU',
        {
            weekday: 'long',
        }
    )
    return (
        <div key={props.data.date} className={`week__day-temp ${theme}`}>
            <div className="week__day--date">
                <div className="week__day-title">{weekday}</div>
                <div className="week__day-weekday">
                    {dateFormatter(props.data.cardDayWeek)}
                </div>
            </div>
            <div>
                <img
                    className="week__day-icon"
                    src={`/images/${props.data.cardIcon}.svg`}
                    alt="weather_icon"
                />
            </div>
            <div className="day__weather">
                <div className="day__weather-inner">
                    <div>Днем: {props.data.tempMax}°</div>
                    <div>Ночью: {props.data.tempMin}°</div>
                </div>
                <div>Ветер: {props.data.windMaxSpeed} мс/с</div>
            </div>
        </div>
    )
}

export default OneDayWeatherCard
