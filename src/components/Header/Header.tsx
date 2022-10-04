import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import { set } from '../../slices/ThemeSlice'
import '../Header/Header.scss'


interface IHeader {
    onChangeCity: (city: string) => void
}

const Header = (props: IHeader) => {
    const theme = useSelector((state: any) => state.theme)
    const dispatch = useDispatch()
    const handleChange = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
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
                    <button
                        className={`navbar__switch ${theme}`}
                        onClick={handleChange}
                    >
                        {theme.toString()}
                    </button>
                    <Input onChange={props.onChangeCity} />
                </div>
            </div>
        </>
    )
}

export default Header
