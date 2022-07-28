import { Button, styled } from '@mui/material'
import { ReactNode } from 'react'

type DashboardButtonProps = {
  children: ReactNode
}

const DButton = styled(Button)({
  blockSize: 'large'
})

const DashboardButton = ({ children }: DashboardButtonProps) => {
  return (
    <DButton variant="outlined" color="primary" fullWidth>
      {children}
    </DButton>
  )
}

export default DashboardButton
