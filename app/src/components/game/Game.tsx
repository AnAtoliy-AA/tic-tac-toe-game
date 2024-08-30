import { FC, useCallback, useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../../utils/calculateWinner'
import GameInfo from './GameInfo'
import styled from 'styled-components'
import Settings from './Settings'

const createHistory = (size: number) => [Array(size * size).fill(null)]
const DEFAULT_GAME_SIZE = 3
const DEFAULT_GAME_HISTORY = createHistory(DEFAULT_GAME_SIZE)

const StyledGame = styled.div`
  margin: 0 auto;
  width: 15rem;
`

const Game: FC = () => {
  const [history, setHistory] =
    useState<Array<Array<string | null>>>(DEFAULT_GAME_HISTORY)
  const [stepNumber, setStepNumber] = useState<number>(0)
  const [isXNext, setIsXNext] = useState<boolean>(true)
  const [gameSize, setGameSize] = useState<number>(DEFAULT_GAME_SIZE)

  const current = history[stepNumber]
  const winner = calculateWinner(current, gameSize)

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

  const handleChangeGameSize = useCallback(
    (item: string) => {
      const size = Number(item[0])

      setGameSize(size)
      setHistory(createHistory(size))
    },
    [setGameSize],
  )

  return (
    <StyledGame>
      <Settings gameSize={gameSize} onChangeGameSize={handleChangeGameSize} />
      <Board size={gameSize} squares={current} onClick={handleClick} />
      <GameInfo winner={winner} isXNext={isXNext} />
    </StyledGame>
  )
}

export default Game
