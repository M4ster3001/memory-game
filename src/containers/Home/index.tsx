import { Dashboard, DashboardButton, DashboardMenu } from '../../components'

const Home = () => {
  return (
    <Dashboard>
      <DashboardMenu title="Jogo da Memória">
        <DashboardButton>Iniciar Jogo</DashboardButton>
      </DashboardMenu>
    </Dashboard>
  )
}

export default Home
