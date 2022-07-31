import { select, put, delay, takeEvery } from 'redux-saga/effects'
import { Card } from '../dtos'
import { RootState } from '../store'
import { gameActions } from './gameSlice'

type SelectCardProps = {
  type: string
  key: string
}

function* selectCard({ type, key }: SelectCardProps) {
  try {
    const cards: Card[] = yield select((state: RootState) => state.game.cards)
    const isLocked: boolean = yield select(
      (state: RootState) => state.game.isLocked
    )
    const index = cards.findIndex(c => c.key === key)
    const otherCardIndex = cards.findIndex(c => c.isActive && !c.hasMatch)

    if (!isLocked && index > -1 && !cards[index].isActive) {
      yield put(gameActions.OPEN_CARD(index))

      if (otherCardIndex > -1) {
        if (cards[index].id === cards[otherCardIndex].id) {
          yield put(
            gameActions.SET_MATCH({
              index1: index,
              index2: otherCardIndex
            })
          )
        } else {
          yield put(gameActions.LOCK({}))
          yield delay(1500)
          yield put(
            gameActions.CLOSE_CARDS({
              index1: index,
              index2: otherCardIndex
            })
          )
        }
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export function* gameSaga() {
  yield takeEvery('SELECT_CARD', selectCard)
}
