import { FC, useCallback } from 'react'
import Cell from './Cell'
import styled from 'styled-components'

export interface BoardProps {
  size: number
  squares: Array<string | null>
  winningCells: Array<number> | null
  onClick: (i: number) => void
}

const StyledBoard = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  gap: 0.5rem;
`

const Board: FC<BoardProps> = ({ size, squares, winningCells, onClick }) => {
  const handleClick = useCallback(
    (key: number) => () => onClick(key),
    [onClick],
  )

  return (
    <StyledBoard size={size}>
      {Array(size * size)
        .fill(null)
        .map((_, index) => {
          const isWinningCell = !!winningCells?.includes(index)

          return (
            <Cell
              key={index}
              size={size}
              value={squares[index]}
              onClick={handleClick(index)}
              isWinningCell={isWinningCell}
            />
          )
        })}
    </StyledBoard>
  )
}

export default Board
