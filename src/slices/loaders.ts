import { createSlice } from '@reduxjs/toolkit'

const initialState = true

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        loading: (state, action) => {
            state = action.payload
            return state
        },
    },
})

export const { loading } = loaderSlice.actions

export default loaderSlice.reducer
