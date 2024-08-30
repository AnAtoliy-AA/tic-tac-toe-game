import { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownContent = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: 'absolute';
  background-color: var(--background-secondary);
  width: 10rem;
  box-shadow: '0 8px 16px rgba(0, 0, 0, 0.2)';
  z-index: 1;
  border-radius: '0.25rem';
  overflow: 'hidden';
`

const DropdownItem = styled.p`
  color: var(--text);
  padding: 0.75rem 1rem;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;
  border: 1px solid var(--background);
  cursor: pointer;

  &:hover {
    background-color: var(--primary-light);
  }
`

interface DropdownProps {
  value: string | number
  items: string[]
  text?: string
  onSelect: (item: string) => void
}

const Dropdown: FC<DropdownProps> = ({ items, text, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = useCallback(
    (item: string) => () => {
      onSelect(item)
      setIsOpen(false)
    },
    [onSelect],
  )

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <StyledDropdown>
      <Button onClick={toggleOpen}>{text || 'Select an option'}</Button>
      <DropdownContent $isOpen={isOpen}>
        {items.map((item, index) => (
          <DropdownItem key={index} onClick={handleSelect(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownContent>
    </StyledDropdown>
  )
}

export default Dropdown
