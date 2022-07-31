import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

export const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    game: gameReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
