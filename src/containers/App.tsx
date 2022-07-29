import { CssBaseline } from '@mui/material'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../store'
import AppRoutes from './routes'

const App = () => (
  <ReduxProvider store={store}>
    <CssBaseline />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ReduxProvider>
)

export default App
