import { Dashboard, DashboardButton, DashboardMenu } from '../../components'

const Home = () => {
  return (
    <Dashboard>
      <DashboardMenu title="Jogo da Memória">
        <DashboardButton to="/game">Iniciar Jogo</DashboardButton>
      </DashboardMenu>
    </Dashboard>
  )
}

export default Home
