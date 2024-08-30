import { PropsWithChildren } from 'react'
import { ThemeProvider } from './themeProvider'
import GlobalStyle from '../constants/styles/theme'

export const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  )
}
