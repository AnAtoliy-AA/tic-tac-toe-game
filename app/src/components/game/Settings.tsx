import { useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme'
import ToggleCheckbox from '../styled/ToggleCheckbox'

const Settings = () => {
  const { themeType, setCurrentTheme } = useTheme()
  const isDarkTheme = themeType === 'dark'

  const toggleTheme = useCallback(() => {
    setCurrentTheme?.(isDarkTheme ? 'light' : 'dark')
  }, [isDarkTheme, setCurrentTheme])

  return (
    <>
      <ToggleCheckbox isChecked={isDarkTheme} toggleCheckbox={toggleTheme} />
    </>
  )
}

export default Settings
