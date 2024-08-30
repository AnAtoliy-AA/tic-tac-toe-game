import { FC, useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme'
import ToggleCheckbox from '../styled/ToggleCheckbox'
import Dropdown from '../styled/DropDown'
import { BoardSize } from '../../utils/calculateWinner'

const dropdownItems = Object.values(BoardSize)
  .filter(Number)
  .map((boardSize) => `${boardSize} x ${boardSize}`)

interface SettingsProps {
  gameSize: number
  onChangeGameSize: (item: string) => void
}

const Settings: FC<SettingsProps> = ({ gameSize, onChangeGameSize }) => {
  const { themeType, setCurrentTheme } = useTheme()
  const isDarkTheme = themeType === 'dark'

  const toggleTheme = useCallback(() => {
    setCurrentTheme?.(isDarkTheme ? 'light' : 'dark')
  }, [isDarkTheme, setCurrentTheme])

  return (
    <>
      <ToggleCheckbox isChecked={isDarkTheme} toggleCheckbox={toggleTheme} />
      <Dropdown
        value={gameSize}
        text='Change game size'
        onSelect={onChangeGameSize}
        items={dropdownItems}
      />
    </>
  )
}

export default Settings
