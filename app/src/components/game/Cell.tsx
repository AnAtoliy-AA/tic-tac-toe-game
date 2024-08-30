import { FC } from 'react'
import styled from 'styled-components'
import { CellValues } from '../../utils/calculateWinner'

interface CellProps {
  value: string | null
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

const StyledCell = styled.div<{
  value: string | null
  $isWinningCell: boolean
}>`
  background: var(--background);
  border: 1px solid;
  border-color: ${({ $isWinningCell }) =>
    $isWinningCell ? 'var(--error)' : 'var(--background-secondary)'};
  color: ${({ value }) => getColor(value)};
  font-size: 3rem;
  padding: 0;
  text-align: center;
  width: 5rem;
  height: 5rem;
`

const Cell: FC<CellProps> = ({ value, isWinningCell, onClick }) => (
  <StyledCell value={value} onClick={onClick} $isWinningCell={isWinningCell}>
    {value}
  </StyledCell>
)

export default Cell
