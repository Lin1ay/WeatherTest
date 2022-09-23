import React from 'react'

interface IInput {
    onChange: (city: string) => void
}

function Input({ onChange }: IInput) {
    return (
        <div>
            <input
                className="weather__header-input"
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
