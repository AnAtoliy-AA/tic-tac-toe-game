import { FC, lazy, useCallback, useState } from 'react'
import { calculateWinner } from '../../utils/calculateWinner'
import styled from 'styled-components'

const Board = lazy(() => import('./Board'))
const GameInfo = lazy(() => import('./GameInfo'))
const Settings = lazy(() => import('./Settings'))
const GameHistory = lazy(() => import('./GameHistory'))

const createHistory = (size: number) => [Array(size * size).fill(null)]
const DEFAULT_GAME_SIZE = 3
const DEFAULT_GAME_HISTORY = createHistory(DEFAULT_GAME_SIZE)

const StyledGame = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const Game: FC = () => {
  const [history, setHistory] =
    useState<Array<Array<string | null>>>(DEFAULT_GAME_HISTORY)
  const [stepNumber, setStepNumber] = useState<number>(0)
  const [isXNext, setIsXNext] = useState<boolean>(true)
  const [gameSize, setGameSize] = useState<number>(DEFAULT_GAME_SIZE)

  const current = history[stepNumber]
  const { winner, winningCells } = calculateWinner(current, gameSize)

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
      <GameHistory
        gameHistory={history}
        setIsXNext={setIsXNext}
        setStepNumber={setStepNumber}
      />
      <div>
        <Board
          size={gameSize}
          squares={current}
          onClick={handleClick}
          winningCells={winningCells}
        />
        <GameInfo winner={winner} isXNext={isXNext} />
      </div>
      <Settings gameSize={gameSize} onChangeGameSize={handleChangeGameSize} />
    </StyledGame>
  )
}

export default Game
