import { Paper, styled, Typography } from '@mui/material'
import { ReactNode } from 'react'

type DashboardMenuProps = {
  children: ReactNode
  title: string
}

const DPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6)
}))

const DTypography = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(6),
  alignItems: 'center'
}))

const DashboardMenu = ({ children, title }: DashboardMenuProps) => {
  return (
    <DPaper>
      <DTypography variant="h4">{title}</DTypography>

      {children}
    </DPaper>
  )
}

export default DashboardMenu
