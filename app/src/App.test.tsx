import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('renders the title', () => {
    render(<App />)

    const titleElement = screen.getByRole('heading', {
      name: /tic tac toe game/i,
    })

    expect(titleElement).toBeInTheDocument()
  })

  it('displays loading fallback while Game component is being loaded', async () => {
    render(<App />)
    const loadingElement = screen.getByText(/loading.../i)

    expect(loadingElement).toBeInTheDocument()

    const gameElement = await screen.findByTestId('game-component')

    expect(gameElement).toBeInTheDocument()
  })

  it('renders the Game component after loading', async () => {
    render(<App />)

    const gameElement = await screen.findByTestId('game-component')

    expect(gameElement).toBeInTheDocument()
  })
})
