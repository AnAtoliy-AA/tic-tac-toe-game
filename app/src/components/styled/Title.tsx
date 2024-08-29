import styled from 'styled-components'

const Title = styled.h1.attrs((props) => ({
  as: props.as || 'h1',
}))`
  font-size: ${(props) => {
    switch (props.as) {
      case 'h1':
        return '2.5em'
      case 'h2':
        return '2em'
      case 'h3':
        return '1.75em'
      case 'h4':
        return '1.5em'
      case 'h5':
        return '1.25em'
      case 'h6':
        return '1em'
      default:
        return '2.5em'
    }
  }};
  text-align: center;
  color: var(--primary);
  margin-top: 20px;
`

export default Title
