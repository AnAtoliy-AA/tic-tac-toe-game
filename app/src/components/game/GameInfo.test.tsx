import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import GameInfo from './GameInfo'

vi.mock('../styled/Title', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
}))

describe('GameInfo Component', () => {
  it('renders winner message when a winner is provided', () => {
    render(<GameInfo winner='X' isXNext={true} />)
    expect(screen.getByText('Winner: X')).toBeInTheDocument()
  })

  it('renders draw message when isDraw is true', () => {
    render(<GameInfo winner={null} isXNext={true} isDraw={true} />)
    expect(screen.getByText('No more moves')).toBeInTheDocument()
  })

  it('renders next player message when no winner or draw', () => {
    render(<GameInfo winner={null} isXNext={true} />)
    expect(screen.getByText('Next Player: X')).toBeInTheDocument()
  })

  it('renders the next player message for player O when isXNext is false', () => {
    render(<GameInfo winner={null} isXNext={false} />)
    expect(screen.getByText('Next Player: O')).toBeInTheDocument()
  })
})
