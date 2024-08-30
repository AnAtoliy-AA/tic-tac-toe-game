import { FC } from 'react'
import styled from 'styled-components'
import { BoardSize, CellValues } from '../../utils/calculateWinner'

interface CellProps {
  value: string | null
  size: BoardSize | null
  isWinningCell: boolean
  onClick: VoidFunction
}

const getColor = (value: string | null): string => {
  switch (value?.toLowerCase()) {
    case CellValues.CROSS:
      return 'var(--primary)'
    case CellValues.ZERO:
      return 'var(--secondary)'
    default:
      return 'var(--text)'
  }
}

const getSize = (size: BoardSize | null): string => {
  switch (size) {
    case BoardSize.SMALL:
      return '5rem'
    case BoardSize.MEDIUM:
      return '4rem'
    case BoardSize.LARGE:
      return '3rem'
    default:
      return '5rem'
  }
}

const getFontSize = (size: BoardSize | null): string => {
  switch (size) {
    case BoardSize.SMALL:
      return '3rem'
    case BoardSize.MEDIUM:
      return '2.5rem'
    case BoardSize.LARGE:
      return '2rem'
    default:
      return '3rem'
  }
}

const StyledCell = styled.div<{
  value: string | null
  size: BoardSize | null
  $isWinningCell: boolean
}>`
  background: var(--background);
  border: 2px solid;
  border-color: ${({ $isWinningCell }) =>
    $isWinningCell ? 'var(--error)' : 'var(--background-secondary)'};
  color: ${({ value }) => getColor(value)};
  font-size: ${({ size }) => getFontSize(size)};
  padding: 0;
  text-align: center;
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
`

const Cell: FC<CellProps> = ({ value, size, isWinningCell, onClick }) => (
  <StyledCell
    value={value}
    size={size}
    onClick={onClick}
    $isWinningCell={isWinningCell}
  >
    {value}
  </StyledCell>
)

export default Cell
