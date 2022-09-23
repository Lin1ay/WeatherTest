import React from 'react'
import Input from './input'

interface IHeader {
    onChangeCity: (city: string) => void
}

const Header = (props: IHeader) => {
    return (
        <>
            <div className="weather__header">
                <div className="weather__header-logo">
                    <img src="/images/HeaderLogo.svg" alt="header_logo" />
                    <div className="weather__header-title">REACT WEATHER</div>
                    <div className="city"></div>
                </div>
                <div className="weather__header-switch">
                    <img src="/images/switch.svg" alt="theme_switch" />
                    <Input onChange={props.onChangeCity} />
                </div>
            </div>
        </>
    )
}

export default Header
