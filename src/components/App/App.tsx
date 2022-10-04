import React, { FC, useEffect, useState } from 'react'
import '../App/App.scss'
import TodayCardWeather from '../FiveDayWeather/FiveDayWeather'
import getWeatherData from '../../fetch/getWeatherData'
import Header from '../Header/Header'
import MainTodayWeatherFrame from '../../components/TodayWeather/TodayWeather'
import DetailsTodayWeatherFrame from '../TodayDetails/TodayDetails'
import LoadingSpinner from '../Spinner/Spinner'
import { loading } from '../../slices/loaders'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../slices/slice'

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
