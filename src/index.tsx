import ReactDOM from 'react-dom/client'
import './index.scss'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Theme from './components/Theme/Theme'
import App from './components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <Theme>
            <App />
        </Theme>
    </Provider>
)
