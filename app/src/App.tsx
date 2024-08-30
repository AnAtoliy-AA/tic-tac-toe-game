import { lazy } from 'react'
import Title from './components/styled/Title'
import { AllProviders } from './providers/allProviders'

const Game = lazy(() => import('./components/game/Game'))

function App() {
  return (
    <AllProviders>
      <Title as='h1'>Tic Tac Toe Game</Title>
      <Game />
    </AllProviders>
  )
}

export default App
