import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import WeekWeather from './components/App/App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Theme from './components/Theme/Theme'



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <Theme>
            <WeekWeather />
        </Theme>
    </Provider>
)
