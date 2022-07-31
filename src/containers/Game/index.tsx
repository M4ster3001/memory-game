import { Board, Card, VictoryDialog } from '../../components'
import { Card as TCard } from '../../dtos'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { gameActions, selectCards } from '../../reducers'

const GamePage = () => {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(selectCards)
  const currentState = useAppSelector(state => state.game)

  function handleCardClick(card: TCard) {
    dispatch({ type: 'SELECT_CARD', key: card.key })
  }

  function handleCloseVictoryDialog() {
    dispatch(gameActions.CLOSE_VICTORY_DIALOG({}))
  }

  function handleGameRestart() {
    console.log('restart')
    dispatch(gameActions.START_GAME({}))
  }

  return (
    <>
      <Board>
        {cards &&
          cards.map(card => (
            <Card
              key={card.key}
              name={card.name}
              onClick={() => handleCardClick(card)}
              isActive={card.isActive}
            />
          ))}
      </Board>
      <VictoryDialog
        isOpen={currentState.isVictoryDialogOpen}
        onClose={handleCloseVictoryDialog}
        onGameRestart={handleGameRestart}
      />
    </>
  )
}

export default GamePage
