import { calculateWinner, BoardSize } from './calculateWinner'

describe('calculateWinner', () => {
  test('should return null for an empty board', () => {
    const size = BoardSize.SMALL
    const squares = Array(size * size).fill(null)
    expect(calculateWinner(squares, size)).toBeNull()
  })

  test('should return winner for a 3x3 board with a horizontal win', () => {
    const size = BoardSize.SMALL
    const squares = ['X', 'X', 'X', null, null, null, null, null, null]
    expect(calculateWinner(squares, size)).toBe('X')
  })

  test('should return winner for a 3x3 board with a vertical win', () => {
    const size = BoardSize.SMALL
    const squares = ['O', null, null, 'O', null, null, 'O', null, null]
    expect(calculateWinner(squares, size)).toBe('O')
  })

  test('should return winner for a 3x3 board with a diagonal win', () => {
    const size = BoardSize.SMALL
    const squares = ['X', null, null, null, 'X', null, null, null, 'X']
    expect(calculateWinner(squares, size)).toBe('X')
  })

  test('should return null for a 3x3 board with no winner', () => {
    const size = BoardSize.SMALL
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O']
    expect(calculateWinner(squares, size)).toBeNull()
  })

  test('should return winner for a 5x5 board with a horizontal win', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      'X',
      'X',
      'X',
      'X',
      'X',
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
    expect(calculateWinner(squares, size)).toBe('X')
  })

  test('should return winner for a 5x5 board with a vertical win', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      'O',
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
    ]
    expect(calculateWinner(squares, size)).toBe('O')
  })

  test('should return winner for a 5x5 board with a diagonal win', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      'X',
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
      null,
      null,
      null,
      null,
      'X',
    ]
    expect(calculateWinner(squares, size)).toBe('X')
  })

  test('should return null for a 5x5 board with no winner', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      'X',
      null,
      'X',
      'O',
      null,
      'O',
      'X',
      'O',
      'X',
      null,
      'X',
      'O',
      null,
      'O',
      'X',
      null,
      'X',
      'O',
      'X',
      'O',
      'X',
      'O',
      'X',
      null,
      'X',
    ]
    expect(calculateWinner(squares, size)).toBeNull()
  })

  test('should return winner for a 7x7 board with a horizontal win', () => {
    const size = BoardSize.LARGE
    const squares = [
      'X',
      'X',
      'X',
      'X',
      'X',
      'X',
      'X',
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
    expect(calculateWinner(squares, size)).toBe('X')
  })

  test('should return winner for a 7x7 board with a vertical win', () => {
    const size = BoardSize.LARGE
    const squares = [
      'O',
      null,
      null,
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
      null,
      null,
      'O',
      null,
      null,
      null,
      null,
      null,
      null,
    ]
    expect(calculateWinner(squares, size)).toBe('O')
  })

  test('should return winner for a 7x7 board with a diagonal win', () => {
    const size = BoardSize.LARGE
    const squares = [
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      'X',
    ]
    expect(calculateWinner(squares, size)).toBe('X')
  })

  test('should return null for a 7x7 board with no winner', () => {
    const size = BoardSize.LARGE
    const squares = Array(size * size).fill(null)
    expect(calculateWinner(squares, size)).toBeNull()
  })

  test('should detect a down-right diagonal win', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      'X',
      null,
      null,
      null,
      null,
      'O',
      'X',
      null,
      null,
      null,
      'O',
      'O',
      'X',
      null,
      null,
      'O',
      'O',
      'O',
      'X',
      null,
      'X',
      'X',
      'X',
      'X',
      'X',
    ]
    expect(calculateWinner(squares, size)).toBe('X')
  })

  test('should detect a winning down-right diagonal', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      'X',
      null,
      null,
      null,
      null,
      'O',
      'X',
      null,
      null,
      null,
      'O',
      'O',
      null,
      null,
      null,
      'O',
      'O',
      'O',
      'X',
      null,
      'O',
      'O',
      'O',
      'O',
      'X',
    ]
    expect(calculateWinner(squares, size)).toBe('O')
  })

  test('should detect a winning down-left diagonal', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      null,
      null,
      null,
      null,
      'X',
      'O',
      'O',
      null,
      'X',
      null,
      'O',
      'O',
      'O',
      'X',
      null,
      'O',
      'O',
      'O',
      null,
      null,
      'X',
      null,
      null,
      'O',
      null,
    ]
    expect(calculateWinner(squares, size)).toBe('O')
  })

  test('should return null if no winner with incomplete diagonals', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      'X',
      'O',
      'X',
      'O',
      'X',
      'O',
      'X',
      null,
      'X',
      'O',
      'X',
      'O',
      null,
      'O',
      'X',
      'O',
      'X',
      null,
      'X',
      'O',
      'X',
      'O',
      'X',
      'O',
      'X',
    ]
    expect(calculateWinner(squares, size)).toBeNull()
  })

  test('should return null for random arrangement without a winning line', () => {
    const size = BoardSize.MEDIUM
    const squares = [
      'X',
      'O',
      'X',
      'X',
      'O',
      'O',
      'X',
      null,
      'X',
      'X',
      'X',
      'O',
      'O',
      'O',
      'X',
      'O',
      'X',
      'X',
      'X',
      'O',
      'X',
      'O',
      'X',
      'O',
      'X',
    ]
    expect(calculateWinner(squares, size)).toBeNull()
  })
})
