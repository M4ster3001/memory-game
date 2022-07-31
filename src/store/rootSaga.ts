import { all } from 'redux-saga/effects'
import { gameSaga } from '../reducers'

export default function* rootSaga() {
  yield all([gameSaga()])
}
