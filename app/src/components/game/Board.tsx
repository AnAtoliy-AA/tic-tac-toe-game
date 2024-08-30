import { FC } from 'react'
import Row from './Row'

export interface BoardProps {
  size: number
  squares: Array<string | null>
  winningCells: Array<number> | null
  onClick: (i: number) => void
}

const Board: FC<BoardProps> = ({ size, squares, winningCells, onClick }) => {
  return (
    <div>
      {Array(size)
        .fill(null)
        .map((_, rowIndex) => {
          return (
            <Row
              key={rowIndex}
              size={size}
              squares={squares}
              rowIndex={rowIndex}
              winningCells={winningCells}
              onClick={onClick}
            />
          )
        })}
    </div>
  )
}

export default Board
