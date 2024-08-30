import { lazy, Suspense } from 'react'
import Title from './components/styled/Title'
import { AllProviders } from './providers/allProviders'

const Game = lazy(() => import('./components/game/Game'))

function App() {
  return (
    <AllProviders>
      <Title as='h1'>Tic Tac Toe Game</Title>
      <Suspense fallback={<div>Loading...</div>}>
        <Game />
      </Suspense>
    </AllProviders>
  )
}

export default App
