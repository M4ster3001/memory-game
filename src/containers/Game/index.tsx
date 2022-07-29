import { Board, Card } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { SELECT_CARD } from '../../reducers/game'
import { RootState } from '../../store'

const GamePage = () => {
  const dispatch = useAppDispatch()
  const isActive = useAppSelector((state: RootState) => state.game.isActive)

  function handleCardClick() {
    dispatch(SELECT_CARD())
  }

  return (
    <Board>
      <Card name="Back" onClick={handleCardClick} isActive={isActive} />
    </Board>
  )
}

export default GamePage
