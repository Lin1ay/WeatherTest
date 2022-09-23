import { createSlice } from '@reduxjs/toolkit'
import { defaultWeatherData } from '../utils/constsApp'
import { IDataMain } from '../../types/types'

const initialState: IDataMain = defaultWeatherData

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state = action.payload
            return state
        },
    },
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
