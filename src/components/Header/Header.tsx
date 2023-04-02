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
            <div className="weather__header">
                <div className="weather__header-logo">
                    <img src="/images/HeaderLogo.svg" alt="header_logo" />
                </div>
                <div className="weather__header-title">REACT WEATHER</div>
            </div>
            <div className="navbar">
                <div className="search__panel">
                    <Input onChange={props.onChangeCity} />
                </div>
                <button
                    className={`navbar__switch ${state.theme}`}
                    onClick={handleChange}
                >
                    {state.theme.toString()}
                </button>
            </div>
        </>
    )
}

export default Header
