import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from '../reducers'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    game: gameReducer
  },
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
