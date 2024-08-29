import { FC } from 'react'
import Row from './Row'

export interface BoardProps {
  size: number
  squares: Array<string | null>
  onClick: (i: number) => void
}

const Board: FC<BoardProps> = ({ size, squares, onClick }) => {
  return (
    <>
      {Array(size)
        .fill(null)
        .map((_, rowIndex) => {
          return (
            <Row
              key={rowIndex}
              size={size}
              squares={squares}
              rowIndex={rowIndex}
              onClick={onClick}
            />
          )
        })}
    </>
  )
}

export default Board
