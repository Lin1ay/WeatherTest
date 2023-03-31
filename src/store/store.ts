import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from '../slices/slice'
import themeSlice from '../slices/ThemeSlice'
import loaderSlice from '../slices/loaders'

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        theme: themeSlice,
        loader: loaderSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
