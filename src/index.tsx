import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import WeekWeather from './components/App'
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <WeekWeather />
    </Provider>
)
