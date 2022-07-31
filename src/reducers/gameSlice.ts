import { createSlice, current } from '@reduxjs/toolkit'
import { ListBuilder } from '../builders'
import { RootState } from '../store'

const listBuilder = new ListBuilder([])

const initialState = {
  isLocked: false,
  cards: listBuilder.createList(3).shuffle().build()
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
