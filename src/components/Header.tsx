import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from './input'
import { set } from '../slices/ThemeSlice'

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
                    <div className="weather__header-title">REACT WEATHER</div>
                    <div className="city"></div>
                </div>
                <div className="weather__header-switch">
                    <img
                        src="/images/switch.svg"
                        alt="theme_switch"
                        onClick={handleChange}
                    />
                    <Input onChange={props.onChangeCity} />
                </div>
            </div>
        </>
    )
}

export default Header
