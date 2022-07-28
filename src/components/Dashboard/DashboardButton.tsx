import { Button, ButtonProps, styled } from '@mui/material'
import { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

type DashboardButtonProps = ButtonProps &
  LinkProps & {
    children: ReactNode
  }

const DButton = styled(Button)({})

const DashboardButton = ({ children, ...rest }: DashboardButtonProps) => {
  return (
    <DButton
      LinkComponent={Link}
      variant="outlined"
      color="primary"
      size="large"
      fullWidth
      {...rest}
    >
      {children}
    </DButton>
  )
}

export default DashboardButton
