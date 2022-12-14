import { Grid, styled } from '@mui/material'
import { ReactNode } from 'react'

type DashboardProps = {
  children: ReactNode
}

const GridRoot = styled(Grid)({
  height: '100vh',
  backgroundColor: '#fafafa',
  alignItems: 'center',
  justifyContent: 'center'
})

const Dashboard = ({ children }: DashboardProps) => {
  return <GridRoot container>{children}</GridRoot>
}

export default Dashboard
