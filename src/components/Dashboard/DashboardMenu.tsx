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
  padding: theme.spacing(6)
}))

const DashboardMenu = ({ children, title }: DashboardMenuProps) => {
  return (
    <DPaper>
      <DTypography>{title}</DTypography>

      {children}
    </DPaper>
  )
}

export default DashboardMenu
