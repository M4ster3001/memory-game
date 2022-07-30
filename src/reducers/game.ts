import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, sagaMiddleware } from '../store'
import { select, put, call, delay, takeEvery } from 'redux-saga/effects'
import { Card } from '../dtos'

const initialState = {
  isLocked: false,
  cards: [
    { id: 1, key: 1, name: 'Card 1', isActive: false, hasMatch: false },
    { id: 2, key: 2, name: 'Card 2', isActive: false, hasMatch: false },
    { id: 3, key: 3, name: 'Card 3', isActive: false, hasMatch: false },
    { id: 4, key: 4, name: 'Card 4', isActive: false, hasMatch: false },
    { id: 1, key: 5, name: 'Card 1', isActive: false, hasMatch: false },
    { id: 2, key: 6, name: 'Card 2', isActive: false, hasMatch: false },
    { id: 3, key: 7, name: 'Card 3', isActive: false, hasMatch: false },
    { id: 4, key: 8, name: 'Card 4', isActive: false, hasMatch: false }
  ]
}

function* selectCard({ payload, type }: PayloadAction<{ key: number }>) {
  const { key } = payload
  const cards: Card[] = yield select(state => state.cards)
  const isLocked: boolean = yield select(state => state.isLocked)
  const index = cards.findIndex(c => c.key === key)
  const otherCardIndex = cards.findIndex(c => c.isActive && !c.hasMatch)

  if (!isLocked && index > -1 && !cards[index].isActive) {
    yield put({ type: 'OPEN_CARD', index })

    if (otherCardIndex > -1) {
      if (cards[index].id === cards[otherCardIndex].id) {
        yield put({ type: 'SET_MATCH', index1: index, index2: otherCardIndex })
      } else {
        yield put({ type: 'LOCK' })
        yield call(delay, 1500)
        yield put({
          type: 'CLOSE_CARDS',
          index1: index,
          index2: otherCardIndex
        })
      }
    }
  }
}

function* gameSaga() {
  yield takeEvery('SELECT_CARD', selectCard)
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    LOCK(state, action) {
      return {
        ...state,
        isLocked: true
      }
    },
    OPEN_CARD(state, action) {
      const cards = state.cards.slice()

      cards[action.payload.index].isActive = true

      return {
        ...state,
        cards
      }
    },
    SET_MATCH(state, action) {
      const cards = state.cards.slice()

      cards[action.payload.index1].hasMatch = true
      cards[action.payload.index2].hasMatch = true

      return {
        ...state,
        cards
      }
    },
    CLOSE_CARDS(state, action) {
      const cards = state.cards.slice()

      cards[action.payload.index1].isActive = false
      cards[action.payload.index2].isActive = false

      return {
        ...state,
        isLocked: false,
        cards
      }
    }
  }
})

sagaMiddleware.run(gameSaga)

export const gameReducer = gameSlice.reducer
export const actions = gameSlice.actions
export const selectCards = (state: RootState) => state.game.cards
