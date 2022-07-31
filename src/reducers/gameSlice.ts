import { createSlice, current } from '@reduxjs/toolkit'
import { RootState } from '../store'

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
      const currentState = current(state)
      const cards = currentState.cards.slice()
      cards[action.payload] = { ...cards[action.payload], isActive: true }

      return {
        ...state,
        cards
      }
    },
    SET_MATCH(state, action) {
      const cards = current(state).cards.slice()

      cards[action.payload.index1] = {
        ...cards[action.payload.index1],
        hasMatch: true
      }
      cards[action.payload.index2] = {
        ...cards[action.payload.index2],
        hasMatch: true
      }

      return {
        ...state,
        cards
      }
    },
    CLOSE_CARDS(state, action) {
      const cards = current(state).cards.slice()

      cards[action.payload.index1] = {
        ...cards[action.payload.index1],
        isActive: false
      }
      cards[action.payload.index2] = {
        ...cards[action.payload.index2],
        isActive: false
      }

      return {
        ...state,
        isLocked: false,
        cards
      }
    }
  }
})

export const gameReducer = gameSlice.reducer
export const gameActions = gameSlice.actions
export const selectCards = (state: RootState) => state.game.cards
