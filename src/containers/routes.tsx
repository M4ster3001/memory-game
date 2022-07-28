import { Route, Routes } from 'react-router-dom'
import GamePage from './Game'
import Home from './Home'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<GamePage />} />
  </Routes>
)

export default AppRoutes
