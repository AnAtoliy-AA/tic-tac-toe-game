import { calculateWinner, BoardSize, CellValues } from './calculateWinner'

describe('calculateWinner', () => {
  test('should return null for an empty board', () => {
    const size = BoardSize.SMALL
    const squares = Array(size * size).fill(null)
    expect(calculateWinner(squares, size).winner).toBeNull()
  })

  test('should return winner for a 3x3 board with a horizontal win', () => {
    const size = BoardSize.SMALL
    const squares = [
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      null,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.CROSS)
  })

  test('should return winner for a 3x3 board with a vertical win', () => {
    const size = BoardSize.SMALL
    const squares = [
      CellValues.ZERO,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.ZERO)
  })

  test('should return winner for a 3x3 board with a diagonal win', () => {
    const size = BoardSize.SMALL
    const squares = [
      CellValues.CROSS,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      CellValues.CROSS,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.CROSS)
  })

  test('should return null for a 3x3 board with no winner', () => {
    const size = BoardSize.SMALL
    const squares = [
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
    ]
    expect(calculateWinner(squares, size).winner).toBeNull()
  })

  test('should return winner for a 5x5 board with a horizontal win', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.CROSS)
  })

  test('should return winner for a 5x5 board with a vertical win', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.ZERO)
  })

  test('should return winner for a 5x5 board with a diagonal win', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.CROSS)
  })

  test('should return null for a 5x5 board with no winner', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      CellValues.CROSS,
      null,
      CellValues.CROSS,
      CellValues.ZERO,
      null,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      null,
      null,
      CellValues.CROSS,
      null,
      CellValues.ZERO,
      CellValues.CROSS,
      null,
      CellValues.ZERO,
      CellValues.CROSS,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      CellValues.ZERO,
      null,
    ]
    expect(calculateWinner(squares, size).winner).toBeNull()
  })

  test('should return winner for a 7x7 board with a horizontal win', () => {
    const size = BoardSize.LARGE
    const squares = [
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.CROSS)
  })

  test('should return winner for a 7x7 board with a vertical win', () => {
    const size = BoardSize.LARGE
    const squares = [
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.ZERO)
  })

  test('should return winner for a 7x7 board with a diagonal win', () => {
    const size = BoardSize.LARGE
    const squares = [
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.CROSS)
  })

  test('should return null for a 7x7 board with no winner', () => {
    const size = BoardSize.LARGE
    const squares = Array(size * size).fill(null)
    expect(calculateWinner(squares, size).winner).toBeNull()
  })

  test('should detect a down-right diagonal win', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
      null,
      null,
      null,
      null,
      null,
      CellValues.CROSS,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.CROSS)
  })

  test('should detect a winning down-right diagonal', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
      null,
      CellValues.ZERO,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.ZERO)
  })

  test('should detect a winning down-left diagonal', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      null,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      CellValues.ZERO,
      null,
      null,
      null,
      null,
    ]
    expect(calculateWinner(squares, size).winner).toBe(CellValues.ZERO)
  })

  test('should return null if no winner with incomplete diagonals', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      null,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      null,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      null,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
    ]
    expect(calculateWinner(squares, size).winner).toBeNull()
  })

  test('should return null for random arrangement without a winning line', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      null,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.ZERO,
      null,
      null,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      CellValues.ZERO,
      CellValues.CROSS,
      null,
      CellValues.CROSS,
    ]
    expect(calculateWinner(squares, size).winner).toBeNull()
  })
})
