import { createSlice } from '@reduxjs/toolkit'
import { defaultWeatherData } from '../utils/constsApp'
import { IDataMain } from '../../types/types'

const initialState: IDataMain = defaultWeatherData

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        weatherData: (state, action) => {
            state = action.payload
            return state
        },
    },
})

export const { weatherData } = weatherSlice.actions

export default weatherSlice.reducer
