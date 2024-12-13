import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ToggleCheckbox from './ToggleCheckbox'

describe('ToggleCheckbox Component', () => {
  const mockToggleCheckbox = vi.fn()

  it('renders with the correct label text', () => {
    render(
      <ToggleCheckbox
        isChecked={false}
        toggleCheckbox={mockToggleCheckbox}
        label='Toggle me'
      />,
    )
    const labelElement = screen.getByText('Toggle me')

    expect(labelElement).toBeInTheDocument()
  })

  it('renders with correct initial checked state', () => {
    render(
      <ToggleCheckbox
        isChecked={false}
        toggleCheckbox={mockToggleCheckbox}
        label='Toggle me'
      />,
    )
    const checkboxElement = screen.getByRole('checkbox')

    expect(checkboxElement).toHaveStyle('background: var(--secondary)')
  })

  it('toggles checkbox state when clicked', () => {
    render(
      <ToggleCheckbox
        isChecked={false}
        toggleCheckbox={mockToggleCheckbox}
        label='Toggle me'
      />,
    )

    const checkboxElement = screen.getByLabelText('Toggle me')

    fireEvent.click(checkboxElement)

    expect(mockToggleCheckbox).toHaveBeenCalledTimes(1)
  })

  it('sets aria-label correctly', () => {
    render(
      <ToggleCheckbox
        isChecked={false}
        toggleCheckbox={mockToggleCheckbox}
        label='Toggle me'
      />,
    )
    const hiddenCheckbox = screen.getByLabelText(
      'Toggle me',
    ) as HTMLInputElement

    expect(hiddenCheckbox).toBeInTheDocument()
    expect(hiddenCheckbox).toHaveAttribute('aria-label', 'Toggle me')
  })
})
