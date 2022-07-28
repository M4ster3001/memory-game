import { useState } from 'react'
import { Board, Card } from '../../components'

const GamePage = () => {
  const [isActive, setIsActive] = useState(false)
  function handleCardClick() {
    setIsActive(!isActive)
  }

  return (
    <Board>
      <Card name="Back" onClick={handleCardClick} isActive={isActive} />
    </Board>
  )
}

export default GamePage
