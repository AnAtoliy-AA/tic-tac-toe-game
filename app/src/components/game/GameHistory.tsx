import { FC } from 'react'
import { Button } from '../styled/Button'
import Title from '../styled/Title'
import styled from 'styled-components'

const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

interface GameHistoryProps {
  gameHistory: Array<Array<string | null>>
  setStepNumber: (stepNumber: number) => void
  setIsXNext: (isXNext: boolean) => void
}

const GameHistory: FC<GameHistoryProps> = ({
  gameHistory,
  setStepNumber,
  setIsXNext,
}) => {
  const jumpTo = (step: number) => {
    setStepNumber(step)
    setIsXNext(step % 2 === 0)
  }

  return (
    <div>
      <Title as='h2'>Game history:</Title>

      <StyledList>
        {gameHistory.map((_step, move) => {
          const desc = move ? `Go to move #${move}` : 'Go to game start'

          return (
            <li key={move}>
              <Button onClick={() => jumpTo(move)}>{desc}</Button>
            </li>
          )
        })}
      </StyledList>
    </div>
  )
}

export default GameHistory
