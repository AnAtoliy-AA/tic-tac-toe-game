const checkLine = (
  squares: Array<string | null>,
  line: number[],
): number[] | null => {
  const [a, b, c, d] = line
  if (
    squares &&
    squares[a] &&
    squares[a] === squares[b] &&
    squares[a] === squares[c] &&
    (d === undefined || squares[a] === squares[d])
  ) {
    return line
  }

  return null
}

export enum BoardSize {
  SMALL = 3,
  MEDIUM = 5,
  LARGE = 7,
}

const SMALL_BOARD_WIN_LINE = BoardSize.SMALL
const LARGE_BOARD_WIN_LINE = BoardSize.SMALL + 1

export enum CellValues {
  CROSS = 'x',
  ZERO = 'o',
}

export const calculateWinner = (
  squares: Array<string | null>,
  size: number,
): { winner: string | null; winningCells: number[] | null } => {
  const winLength =
    size >= BoardSize.MEDIUM ? LARGE_BOARD_WIN_LINE : SMALL_BOARD_WIN_LINE

  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winLength; j++) {
      const horizontalLine = Array.from(
        { length: winLength },
        (_, k) => i * size + j + k,
      )

      const winningCells = checkLine(squares, horizontalLine)
      if (winningCells) {
        return { winner: squares[horizontalLine[0]], winningCells }
      }

      const verticalLine = Array.from(
        { length: winLength },
        (_, k) => (j + k) * size + i,
      )

      const winningCellsVertical = checkLine(squares, verticalLine)
      if (winningCellsVertical) {
        return {
          winner: squares[verticalLine[0]],
          winningCells: winningCellsVertical,
        }
      }
    }
  }

  for (let i = 0; i <= size - winLength; i++) {
    for (let j = 0; j <= size - winLength; j++) {
      const downRightDiagonal = Array.from(
        { length: winLength },
        (_, k) => (i + k) * size + j + k,
      )

      const winningCellsDownRight = checkLine(squares, downRightDiagonal)
      if (winningCellsDownRight) {
        return {
          winner: squares[downRightDiagonal[0]],
          winningCells: winningCellsDownRight,
        }
      }

      const downLeftDiagonal = Array.from(
        { length: winLength },
        (_, k) => (i + k) * size + j + winLength - 1 - k,
      )

      const winningCellsDownLeft = checkLine(squares, downLeftDiagonal)
      if (winningCellsDownLeft) {
        return {
          winner: squares[downLeftDiagonal[0]],
          winningCells: winningCellsDownLeft,
        }
      }
    }
  }

  return { winner: null, winningCells: null }
}
