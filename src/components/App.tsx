import React, { FC, useEffect, useState } from 'react'

import '../../src/styles/index.css'
import TodayCardWeather from './fiveDayWeather'

import getWeatherData from '../fetch/getWeatherData'
import Header from './Header'
import MainTodayWeatherFrame from './MainTodayWeatherFrame'
import DetailsTodayWeatherFrame from './DetailsTodayWeatherFrame'
import { useDispatch } from 'react-redux'
import { increment } from '../slices/slice'

const App: FC = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('Омск')

    useEffect(() => {
        getWeatherData(city)
            .then((value) => {
                dispatch(increment(value))
            })
            .catch((err) => console.log(err))
    }, [dispatch, city])

    return (
        <div className="weather__frame">
            <Header onChangeCity={setCity} />
            <div className="today__temp">
                <MainTodayWeatherFrame />
                <DetailsTodayWeatherFrame />
            </div>
            <TodayCardWeather />
        </div>
    )
}
export default App
