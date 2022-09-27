import React from 'react'
import { useSelector } from 'react-redux'
interface IInput {
    onChange: (city: string) => void
}

function Input({ onChange }: IInput) {
    const theme = useSelector((state: any) => state.theme)
    return (
        <div>
            <input
                className={`weather__header-input ${theme}`}
                placeholder="Введите название города"
                type="text"
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        onChange(e.currentTarget.value)
                        e.currentTarget.value = ''
                    }
                }}
            />
        </div>
    )
}

export default Input
