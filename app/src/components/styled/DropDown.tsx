import { FC, useCallback, useState } from 'react'
import styled from 'styled-components'

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownButton = styled.button`
  background-color: var(--primary);
  color: var(--text);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-dark);
  }
`

const DropdownContent = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: 'absolute';
  background-color: var(--background);
  min-width: '10rem';
  box-shadow: '0 8px 16px rgba(0, 0, 0, 0.2)';
  z-index: 1;
  border-radius: '0.25rem';
  overflow: 'hidden';
`

const DropdownItem = styled.a`
  color: var(--text);
  padding: 0.75rem 1rem;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;

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
      <DropdownButton onClick={toggleOpen}>
        {text || 'Select an option'}
      </DropdownButton>
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
