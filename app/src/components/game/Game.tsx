import { FC, useCallback, useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../../utils/calculateWinner'
import GameInfo from './GameInfo'
import styled from 'styled-components'

const DEFAULT_GAME_SIZE = 3
const DEFAULT_GAME_HISTORY = [
  Array(DEFAULT_GAME_SIZE * DEFAULT_GAME_SIZE).fill(null),
]

const StyledGame = styled.div`
  margin: 0 auto;
  width: 15rem;
`

const Game: FC = () => {
  const [history, setHistory] =
    useState<Array<Array<string | null>>>(DEFAULT_GAME_HISTORY)
  const [stepNumber, setStepNumber] = useState<number>(0)
  const [isXNext, setIsXNext] = useState<boolean>(true)

  const current = history[stepNumber]
  const winner = calculateWinner(current, DEFAULT_GAME_SIZE)

  const handleClick = useCallback(
    (i: number) => {
      const historyPoint = history.slice(0, stepNumber + 1)
      const current = historyPoint[stepNumber]
      const squares = [...current]

      if (winner || squares[i]) return

      squares[i] = isXNext ? 'X' : 'O'

      setHistory([...historyPoint, squares])
      setStepNumber(historyPoint.length)
      setIsXNext((prev) => !prev)
    },
    [history, isXNext, stepNumber, winner],
  )

  return (
    <StyledGame>
      <Board size={DEFAULT_GAME_SIZE} squares={current} onClick={handleClick} />
      <GameInfo winner={winner} isXNext={isXNext} />
    </StyledGame>
  )
}

export default Game
