import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Title from './Title'

describe('Title Component', () => {
  it('renders as h1 with correct styles', () => {
    const { container } = render(<Title>Heading 1</Title>)
    const titleElement = container.querySelector('h1')

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveStyle('font-size: 2.5em')
    expect(titleElement).toHaveStyle('text-align: center')
    expect(titleElement).toHaveStyle('color: var(--primary)')
  })

  it('renders as h2 with correct styles', () => {
    const { container } = render(<Title as='h2'>Heading 2</Title>)
    const titleElement = container.querySelector('h2')

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveStyle('font-size: 2em')
    expect(titleElement).toHaveStyle('text-align: center')
    expect(titleElement).toHaveStyle('color: var(--primary)')
  })

  it('renders as h3 with correct styles', () => {
    const { container } = render(<Title as='h3'>Heading 3</Title>)
    const titleElement = container.querySelector('h3')

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveStyle('font-size: 1.75em')
    expect(titleElement).toHaveStyle('text-align: center')
    expect(titleElement).toHaveStyle('color: var(--primary)')
  })

  it('renders as h4 with correct styles', () => {
    const { container } = render(<Title as='h4'>Heading 4</Title>)
    const titleElement = container.querySelector('h4')

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveStyle('font-size: 1.5em')
    expect(titleElement).toHaveStyle('text-align: center')
    expect(titleElement).toHaveStyle('color: var(--primary)')
  })

  it('renders as h5 with correct styles', () => {
    const { container } = render(<Title as='h5'>Heading 5</Title>)
    const titleElement = container.querySelector('h5')

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveStyle('font-size: 1.25em')
    expect(titleElement).toHaveStyle('text-align: center')
    expect(titleElement).toHaveStyle('color: var(--primary)')
  })

  it('renders as h6 with correct styles', () => {
    const { container } = render(<Title as='h6'>Heading 6</Title>)
    const titleElement = container.querySelector('h6')

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveStyle('font-size: 1em')
    expect(titleElement).toHaveStyle('text-align: center')
    expect(titleElement).toHaveStyle('color: var(--primary)')
  })
})
