import { Board, Card } from '../../components'
import { Card as TCard } from '../../dtos'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectCards } from '../../reducers'

const GamePage = () => {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(selectCards)

  function handleCardClick(card: TCard) {
    dispatch({ type: 'SELECT_CARD', key: card.key })
  }

  return (
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
  )
}

export default GamePage
