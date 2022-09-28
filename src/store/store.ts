import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/slice'
import themeReducer from '../slices/ThemeSlice'
import loaderSlice  from '../slices/loaders'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        theme: themeReducer,
        loader: loaderSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
