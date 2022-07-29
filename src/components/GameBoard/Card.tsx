import { Card, CardContent, CardProps, styled, Typography } from '@mui/material'
import { useCallback } from 'react'

type CustomCardProps = CardProps & {
  name: string
  isActive?: boolean
  onClick: () => void
}

const width = '160px'
const height = '200px'

const CPage = styled('div')({
  width,
  height,
  position: 'absolute',
  top: 0,
  left: 0,
  backfaceVisibility: 'hidden'
})

const CContainer = styled('div')({
  width,
  height,
  margin: '12px',
  cursor: 'pointer'
})

const CFlipper = styled('div')(props => ({
  transition: 'all .6s linear',
  transformStyle: 'preserve-3d',
  position: 'relative',
  transform: props.defaultChecked ? 'rotateY(180deg)' : ''
}))

const CCard = styled(Card)<{ isActive?: boolean }>(({ isActive }) => {
  if (isActive) {
    return { backgroundColor: 'tomato', transform: 'rotateY(180deg)' }
  }

  return { backgroundColor: 'silver', transform: 'rotateY(0deg)', zIndex: 2 }
}).withComponent(CPage)

const CustomCard = ({ name, isActive = false, onClick }: CustomCardProps) => {
  const CCardContent = useCallback(({ isActive = false }) => {
    if (isActive) {
      return (
        <CCard isActive>
          <CardContent>
            <Typography variant="h5">{name}</Typography>
          </CardContent>
        </CCard>
      )
    }

    return <CCard />
  }, [])

  return (
    <CContainer role={'presentation'} onClick={onClick}>
      <CFlipper defaultChecked={isActive}>
        <CCardContent />
        <CCardContent isActive />
      </CFlipper>
    </CContainer>
  )
}

export default CustomCard
