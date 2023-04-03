import { FC, useEffect, useState } from 'react'
import '../App/App.scss'
import TodayCardWeather from '../FiveDayWeather/FiveDayWeather'
import getWeatherData from '../../fetch/getWeatherData'
import Header from '../Header/Header'
import MainTodayWeatherFrame from '../../components/TodayWeather/TodayWeather'
import DetailsTodayWeatherFrame from '../TodayDetails/TodayDetails'
import LoadingSpinner from '../Spinner/Spinner'
import { loading } from '../../slices/loaders'
import { useDispatch, useSelector } from 'react-redux'
import { weatherData } from '../../slices/slice'
import { store } from '../../store/store'

const App: FC = () => {
    const dispatch = useDispatch()
    const state = useSelector(store.getState)
    const [city, setCity] = useState('Омск')

    useEffect(() => {
        getWeatherData(city)
            .then((value) => {
                dispatch(weatherData(value))
                dispatch(loading(true))
            })
            .catch((err) => err)
    }, [dispatch, city])
    console.log('1')
    return (
        <>
            <LoadingSpinner />
            <div className={`weather__frame ${state.theme}`}>
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
