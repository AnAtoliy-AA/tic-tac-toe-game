import { FC, useCallback } from 'react'
import { BoardProps } from './Board'
import Cell from './Cell'
import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
`

interface RowProps extends BoardProps {
  rowIndex: number
}

const Row: FC<RowProps> = ({
  size,
  squares,
  rowIndex,
  winningCells,
  onClick,
}) => {
  const rowStart = rowIndex * size

  const handleClick = useCallback(
    (key: number) => () => onClick(key),
    [onClick],
  )

  return (
    <StyledRow key={rowIndex}>
      {Array(size)
        .fill(null)
        .map((_, colIndex) => {
          const key = rowStart + colIndex
          const isWinningCell = !!winningCells?.includes(key)

          return (
            <Cell
              key={key}
              value={squares[key]}
              onClick={handleClick(key)}
              isWinningCell={isWinningCell}
            />
          )
        })}
    </StyledRow>
  )
}

export default Row
