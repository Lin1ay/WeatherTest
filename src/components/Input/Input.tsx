import React from 'react'
import { useSelector } from 'react-redux'
import '../Input/Input.scss'

interface IInput {
    onChange: (city: string) => void
}

function Input({ onChange }: IInput) {
    const theme = useSelector((state: any) => state.theme)

    return (
        <>
            <input
                className={`navbar__input ${theme}`}
                placeholder="Введите название города"
                type="text"
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        onChange(e.currentTarget.value)
                        e.currentTarget.value = ''
                    }
                }}
            />
        </>
    )
}

export default Input
