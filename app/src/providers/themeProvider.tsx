import {
  SetStateAction,
  createContext,
  ReactNode,
  useState,
  Dispatch,
} from 'react'
import { THEMES, Theme, ThemeType } from '../constants/styles/theme'
import { CSSProperties } from 'styled-components'

interface ThemeContextProps {
  themeType: ThemeType
  theme: Theme
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>> | null
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'light',
  theme: THEMES['light'],
  setCurrentTheme: null,
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light')
  const theme = THEMES[currentTheme]

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme,
        setCurrentTheme,
      }}
    >
      <div style={{ ...theme } as CSSProperties}>{children}</div>
    </ThemeContext.Provider>
  )
}
