import { Grid, styled } from '@mui/material'
import { ReactNode } from 'react'

type BoardProps = {
  children: ReactNode
}

const BGrid = styled(Grid)({})

const Board = ({ children }: BoardProps) => {
  return <BGrid>{children}</BGrid>
}

export default Board
