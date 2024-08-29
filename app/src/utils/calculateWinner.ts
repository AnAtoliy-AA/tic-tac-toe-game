const checkLine = (
  squares: Array<string | null>,
  line: number[],
): string | null => {
  const [a, b, c, d] = line
  return squares[a] &&
    squares[a] === squares[b] &&
    squares[a] === squares[c] &&
    (d === undefined || squares[a] === squares[d])
    ? squares[a]
    : null
}

export enum BoardSize {
  SMALL = 3,
  MEDIUM = 5,
  LARGE = 7,
}

const SMALL_BOARD_WIN_LINE = BoardSize.SMALL
const LARGE_BOARD_WIN_LINE = BoardSize.SMALL + 1

export const calculateWinner = (
  squares: Array<string | null>,
  size: number,
): string | null => {
  const winLength =
    size >= BoardSize.MEDIUM ? LARGE_BOARD_WIN_LINE : SMALL_BOARD_WIN_LINE

  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winLength; j++) {
      const horizontalLine = Array.from(
        { length: winLength },
        (_, k) => i * size + j + k,
      )

      if (checkLine(squares, horizontalLine)) {
        return squares[horizontalLine[0]]
      }

      const verticalLine = Array.from(
        { length: winLength },
        (_, k) => (j + k) * size + i,
      )

      if (checkLine(squares, verticalLine)) {
        return squares[verticalLine[0]]
      }
    }
  }

  for (let i = 0; i <= size - winLength; i++) {
    for (let j = 0; j <= size - winLength; j++) {
      const downRightDiagonal = Array.from(
        { length: winLength },
        (_, k) => (i + k) * size + j + k,
      )

      if (checkLine(squares, downRightDiagonal)) {
        return squares[downRightDiagonal[0]]
      }

      const downLeftDiagonal = Array.from(
        { length: winLength },
        (_, k) => (i + k) * size + j + winLength - 1 - k,
      )
      if (checkLine(squares, downLeftDiagonal)) {
        return squares[downLeftDiagonal[0]]
      }
    }
  }

  return null
}
