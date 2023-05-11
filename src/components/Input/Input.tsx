import { useSelector } from 'react-redux'
import { store } from '../../store/store'
import '../Input/Input.scss'

interface IInput {
    onChangeCity: (city: string) => void
}

function Input({ onChangeCity }: IInput) {
    const state = useSelector(store.getState)
    const theme = state.theme

    return (
        <input
            className={`navbar__input ${theme}`}
            placeholder="Введите название города"
            type="text"
            inputMode="text"
            onKeyDown={(e) => {
                if (e.code === 'Enter' || e.key === 'Enter') {
                    onChangeCity(e.currentTarget.value)
                    e.currentTarget.value = ''
                }
            }}
        />
    )
}

export default Input
