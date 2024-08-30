import Game from './components/game/Game'
import Title from './components/styled/Title'
import { AllProviders } from './providers/allProviders'

function App() {
  return (
    <AllProviders>
      <Title as='h1'>Tic Tac Toe Game</Title>
      <Game />
    </AllProviders>
  )
}

export default App
