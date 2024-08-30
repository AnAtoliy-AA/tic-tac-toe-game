import { FC } from 'react'
import styled from 'styled-components'

const ToggleWrapper = styled.div`
  display: inline-block;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  background: ${({ checked }) =>
    checked ? 'var(--primary)' : 'var(--secondary)'};
  border-radius: 1.5rem;
  position: relative;
  transition: background 0.3s;

  &::after {
    content: '';
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    background-color: var(--text-light);
    border-radius: 50%;
    position: absolute;
    top: 0.125rem;
    left: ${({ checked }) => (checked ? '1.625rem' : '0.125rem')};
    transition: left 0.3s;
  }
`

const Label = styled.label`
  display: inline-block;
  margin-right: 0.5rem;
  cursor: pointer;
`

interface ToggleCheckboxProps {
  isChecked: boolean
  toggleCheckbox: VoidFunction
  label: string
}

const ToggleCheckbox: FC<ToggleCheckboxProps> = ({
  isChecked,
  toggleCheckbox,
  label,
}) => {
  return (
    <ToggleWrapper>
      <Label>{label}</Label>
      <HiddenCheckbox
        aria-label={label}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <StyledCheckbox checked={isChecked} onClick={toggleCheckbox} />
    </ToggleWrapper>
  )
}

export default ToggleCheckbox
