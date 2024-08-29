import { FC } from 'react'
import styled from 'styled-components'

interface CellProps {
  value: string | null
  onClick: VoidFunction
}

const StyledCell = styled.div`
  background: var(--background);
  border: 1px solid var(--background-secondary);
  font-size: 3rem;
  padding: 0;
  text-align: center;
  width: 5rem;
  height: 5rem;
`

const Cell: FC<CellProps> = ({ value, onClick }) => (
  <StyledCell onClick={onClick}>{value}</StyledCell>
)

export default Cell
