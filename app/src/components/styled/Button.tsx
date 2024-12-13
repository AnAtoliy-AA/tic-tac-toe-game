import styled from 'styled-components'

export const Button = styled.button`
  background-color: var(--primary);
  color: var(--text-light);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary);
  }
`
