import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material'

interface VictoryDialogProps {
  isOpen: boolean
  onClose: () => void
  onGameRestart: () => void
}

const VictoryDialog = ({
  isOpen,
  onClose,
  onGameRestart
}: VictoryDialogProps) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>Parabéns!</DialogTitle>
    <DialogContent>
      <DialogContentText>Você venceu o jogo.</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={onGameRestart}>
        Reiniciar
      </Button>
      <Button color="primary" onClick={onClose}>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
)

export default VictoryDialog
