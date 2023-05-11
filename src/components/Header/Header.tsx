import Input from '../Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../../slices/theme'
import '../Header/Header.scss'
import { store } from '../../store/store'

interface IHeader {
    onChangeCity: (city: string) => void
}

const Header = (props: IHeader) => {
    const state = useSelector(store.getState)
    const dispatch = useDispatch()

    const handleChange = () => {
        const next = state.theme === 'dark' ? 'light' : 'dark'
        dispatch(set(next))
    }
    return (
        <>
            <div className={`header ${state.theme}`}>
                <div className="header__container">
                    <div className="header__container__inner">
                        <img
                            className="header__container__inner_logo"
                            src="/images/HeaderLogo.svg"
                            alt="logo"
                        />
                        <div className="header__container__inner_projectName">
                            REACT WEATHER
                        </div>
                    </div>
                    <button
                        className={`header__switch ${state.theme}`}
                        onClick={handleChange}
                    >
                        {state.theme.toString()}
                    </button>
                </div>
                <div className="header_input">
                    <Input onChangeCity={props.onChangeCity} />
                </div>
            </div>
        </>
    )
}

export default Header
