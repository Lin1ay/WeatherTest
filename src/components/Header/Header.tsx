import Input from '../Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../../slices/ThemeSlice'
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
            <div className="header">
                <div className="header__logo">
                    <img src="/images/HeaderLogo.svg" alt="header_logo" />
                    <div className="header__title">REACT WEATHER</div>
                </div>
                <button
                    className={`header__switch ${state.theme}`}
                    onClick={handleChange}
                >
                    {state.theme.toString()}
                </button>
            </div>
            <div className="navbar">
                <div className="navbar__search-panel">
                    <Input onChange={props.onChangeCity} />
                </div>
            </div>
        </>
    )
}

export default Header
