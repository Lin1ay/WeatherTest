import { useSelector } from 'react-redux'
import { store } from '../../store/store'
import '../Input/Input.scss'

interface IInput {
    onChange: (city: string) => void
}

function Input({ onChange }: IInput) {
    const state = useSelector(store.getState)
    const theme = state.theme

    return (
        <>
            <input
                className={`navbar__input ${theme}`}
                placeholder="Введите название города"
                type="text"
                inputMode="url"
                onKeyDown={(e) => {
                    if (e.code === 'Enter' || e.key === 'Enter') {
                        onChange(e.currentTarget.value)
                        e.currentTarget.value = ''
                    }
                }}
            />
        </>
    )
}

export default Input
