import { FC, lazy, useCallback, useMemo, useState } from 'react'
import { calculateWinner } from '../../utils/calculateWinner'
import styled from 'styled-components'
import { ModalContainer } from '../styled/Modal/ModalContainer'

const Board = lazy(() => import('./Board'))
const GameInfo = lazy(() => import('./GameInfo'))
const Settings = lazy(() => import('./Settings'))
const GameHistory = lazy(() => import('./GameHistory'))

const createHistory = (size: number) => [Array(size * size).fill(null)]
const DEFAULT_GAME_SIZE = 3
const DEFAULT_GAME_HISTORY = createHistory(DEFAULT_GAME_SIZE)
const DEFAULT_STEP_NUMBER = 0

const StyledGame = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const MainContent = styled.div``

const AdditionalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

const Game: FC = () => {
  const [history, setHistory] =
    useState<Array<Array<string | null>>>(DEFAULT_GAME_HISTORY)
  const [stepNumber, setStepNumber] = useState<number>(DEFAULT_STEP_NUMBER)
  const [isXNext, setIsXNext] = useState<boolean>(true)
  const [gameSize, setGameSize] = useState<number>(DEFAULT_GAME_SIZE)

  const current = useMemo(() => history[stepNumber], [history, stepNumber])
  const { winner, isDraw, winningCells } = useMemo(
    () => calculateWinner(current, gameSize),
    [current, gameSize],
  )

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
      setStepNumber(DEFAULT_STEP_NUMBER)
    },
    [setGameSize],
  )

  const handleCloseModal = useCallback(() => {
    setStepNumber(DEFAULT_STEP_NUMBER)
  }, [])

  return (
    <StyledGame>
      <MainContent>
        <Board
          size={gameSize}
          squares={current}
          onClick={handleClick}
          winningCells={winningCells}
        />
        <GameInfo winner={winner} isXNext={isXNext} />
      </MainContent>
      <AdditionalContent>
        <Settings gameSize={gameSize} onChangeGameSize={handleChangeGameSize} />
        <GameHistory
          gameHistory={history}
          setIsXNext={setIsXNext}
          setStepNumber={setStepNumber}
        />
      </AdditionalContent>
      <ModalContainer
        isModalShown={!!winner || isDraw}
        onClick={handleCloseModal}
      >
        <GameInfo winner={winner} isDraw={isDraw} isXNext={isXNext} />
      </ModalContainer>
    </StyledGame>
  )
}

export default Game
