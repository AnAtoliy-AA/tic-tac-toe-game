import Title from './components/styled/tittle'
import { AllProviders } from './providers/allProviders'

function App() {
  return (
    <AllProviders>
      <Title as='h2'>This is Tic Tac Toe Game</Title>
    </AllProviders>
  )
}

export default App
