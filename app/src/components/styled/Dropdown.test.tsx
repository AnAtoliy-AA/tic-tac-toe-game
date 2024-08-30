import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Dropdown from './Dropdown'

vi.mock('./Button', () => ({
  Button: ({
    onClick,
    children,
  }: {
    onClick: () => void
    children: React.ReactNode
  }) => <button onClick={onClick}>{children}</button>,
}))

describe('Dropdown Component', () => {
  const mockOnSelect = vi.fn()

  it('renders the button with the correct text', () => {
    render(
      <Dropdown
        value=''
        items={['Option 1', 'Option 2']}
        text='Choose an option'
        onSelect={mockOnSelect}
      />,
    )
    const buttonElement = screen.getByText('Choose an option')
    expect(buttonElement).toBeInTheDocument()
  })

  it('toggles the dropdown content when the button is clicked', () => {
    render(
      <Dropdown
        value=''
        items={['Option 1', 'Option 2']}
        onSelect={mockOnSelect}
      />,
    )

    expect(screen.queryByText('Option 1')).not.toBeVisible()

    fireEvent.click(screen.getByText('Select an option'))
    expect(screen.getByText('Option 1')).toBeVisible()

    fireEvent.click(screen.getByText('Select an option'))
    expect(screen.queryByText('Option 1')).not.toBeVisible()
  })

  it('calls onSelect with the correct item when an item is clicked', () => {
    render(
      <Dropdown
        value=''
        items={['Option 1', 'Option 2']}
        onSelect={mockOnSelect}
      />,
    )

    fireEvent.click(screen.getByText('Select an option'))

    fireEvent.click(screen.getByText('Option 1'))
    expect(mockOnSelect).toHaveBeenCalledWith('Option 1')
    expect(mockOnSelect).toHaveBeenCalledTimes(1)
  })

  it('renders dropdown with default button text when no text prop is provided', () => {
    render(
      <Dropdown
        value=''
        items={['Option 1', 'Option 2']}
        onSelect={mockOnSelect}
      />,
    )
    const buttonElement = screen.getByText('Select an option')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders dropdown items with correct styles', () => {
    render(
      <Dropdown
        value=''
        items={['Option 1', 'Option 2']}
        onSelect={mockOnSelect}
      />,
    )

    fireEvent.click(screen.getByText('Select an option'))

    const dropdownItem = screen.getByText('Option 1')
    expect(dropdownItem).toHaveStyle('color: var(--text)')
    expect(dropdownItem).toHaveStyle('padding: 0.75rem 1rem')
  })
})
