import { FC, useEffect, useState } from 'react'
import '../App/App.scss'
import getWeatherData from '../../fetch/getWeatherData'
import Header from '../Header/Header'
import Main from './Body/Main'
import LoadingSpinner from '../Spinner/Spinner'
import { loading } from '../../slices/loaders'
import { useDispatch, useSelector } from 'react-redux'
import { weatherData } from '../../slices/weather'
import { store } from '../../store/store'

const App: FC = () => {
    const dispatch = useDispatch()
    const state = useSelector(store.getState)
    const [city, setCity] = useState('Омск')

    useEffect(() => {
        getWeatherData(city)
            .then((value) => {
                dispatch(weatherData(value))
                dispatch(loading(false))
            })
            .catch((err) => err)
    }, [dispatch, city])
    return (
        <>
            <LoadingSpinner />
            <div className={`container ${state.theme}`}>
                <Header onChangeCity={setCity} />
                <Main />
            </div>
        </>
    )
}
export default App
