import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type State = {
  isActive: boolean
}

const initialState = {
  isActive: false
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    SELECT_CARD(state: State, action: PayloadAction) {
      state.isActive = !state.isActive
    }
  }
})

export const gameReducer = gameSlice.reducer
export const { SELECT_CARD } = gameSlice.actions
