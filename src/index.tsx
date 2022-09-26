import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import WeekWeather from './components/App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Theme from './components/theme'



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(

        <Provider store={store}>
            <WeekWeather />
            <Theme/>
        </Provider>    

)
