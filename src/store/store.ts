import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/slice'
import themeReducer from '../ThemeSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        theme: themeReducer,
    },
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
