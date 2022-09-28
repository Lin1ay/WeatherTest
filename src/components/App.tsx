import React, { FC, useEffect, useState } from 'react'
import '../../src/styles/index.scss'
import TodayCardWeather from './fiveDayWeather'
import getWeatherData from '../fetch/getWeatherData'
import Header from './Header'
import MainTodayWeatherFrame from './MainTodayWeatherFrame'
import DetailsTodayWeatherFrame from './DetailsTodayWeatherFrame'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/slice'
import LoadingSpinner from './spinner'
import { loading } from '../slices/loaders'

const App: FC = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: any) => state.theme)
    const [city, setCity] = useState('Омск')

    useEffect(() => {
        getWeatherData(city)
            .then((value) => {
                dispatch(increment(value))
                dispatch(loading(true))
            })
            .catch((err) => console.log(err))
    }, [dispatch, city])

    return (
        <>
            <LoadingSpinner />
            <div className={`weather__frame ${theme}`}>
                <Header onChangeCity={setCity} />
                <div className="today__temp">
                    <MainTodayWeatherFrame />
                    <DetailsTodayWeatherFrame />
                </div>
                <TodayCardWeather />
            </div>
        </>
    )
}
export default App
