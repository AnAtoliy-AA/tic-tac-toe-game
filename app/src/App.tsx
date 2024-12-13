import { lazy, Suspense } from 'react'
import Title from './components/styled/Title'
import { AllProviders } from './providers/allProviders'
import styled from 'styled-components'

const Game = lazy(() => import('./components/game/Game'))

const AppWrapper = styled.div`
  height: 100vh;
  background-color: var(--background);
`

function App() {
  return (
    <AllProviders>
      <AppWrapper>
        <Title as='h1'>Tic Tac Toe Game</Title>
        <Suspense fallback={<div>Loading...</div>}>
          <Game />
        </Suspense>
      </AppWrapper>
    </AllProviders>
  )
}

export default App
