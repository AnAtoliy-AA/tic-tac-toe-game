import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Cell from './Cell'
import { BoardSize, CellValues } from '../../utils/calculateWinner'

describe('Cell Component', () => {
  const mockOnClick = vi.fn()

  it('renders the correct value for CROSS', () => {
    render(
      <Cell
        value={CellValues.CROSS}
        size={BoardSize.SMALL}
        isWinningCell={false}
        onClick={mockOnClick}
      />,
    )

    const cellElement = screen.getByText(CellValues.CROSS)

    expect(cellElement).toBeInTheDocument()
    expect(cellElement).toHaveStyle('color: var(--primary)')
  })

  it('renders the correct value for ZERO', () => {
    render(
      <Cell
        value={CellValues.ZERO}
        size={BoardSize.MEDIUM}
        isWinningCell={false}
        onClick={mockOnClick}
      />,
    )

    const cellElement = screen.getByText(CellValues.ZERO)

    expect(cellElement).toBeInTheDocument()
    expect(cellElement).toHaveStyle('color: var(--secondary)')
  })

  it('renders a winning cell with the correct border color', () => {
    render(
      <Cell
        value={CellValues.CROSS}
        size={BoardSize.LARGE}
        isWinningCell={true}
        onClick={mockOnClick}
      />,
    )

    const cellElement = screen.getByText(CellValues.CROSS)

    expect(cellElement).toBeInTheDocument()
    expect(cellElement).toHaveStyle('border-color: var(--error)')
  })

  it('renders the correct size based on BoardSize', () => {
    render(
      <Cell
        value={CellValues.CROSS}
        size={BoardSize.SMALL}
        isWinningCell={false}
        onClick={mockOnClick}
      />,
    )

    const cellElement = screen.getByText(CellValues.CROSS)

    expect(cellElement).toHaveStyle('width: 5rem')
    expect(cellElement).toHaveStyle('height: 5rem')
    expect(cellElement).toHaveStyle('font-size: 3rem')
  })

  it('calls the onClick handler when clicked', async () => {
    render(
      <Cell
        value={CellValues.CROSS}
        size={BoardSize.SMALL}
        isWinningCell={false}
        onClick={mockOnClick}
      />,
    )

    const cellElement = screen.getByText(CellValues.CROSS)

    await userEvent.click(cellElement)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
