import { FC, useCallback, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import ToggleCheckbox from '../styled/ToggleCheckbox'
import Dropdown from '../styled/DropDown'
import { BoardSize } from '../../utils/calculateWinner'
import { Button } from '../styled/Button'
import styled from 'styled-components'

const dropdownItems = Object.values(BoardSize)
  .filter(Number)
  .map((boardSize) => `${boardSize} x ${boardSize}`)

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

interface SettingsProps {
  gameSize: number
  onChangeGameSize: (item: string) => void
}

const Settings: FC<SettingsProps> = ({ gameSize, onChangeGameSize }) => {
  const { themeType, setCurrentTheme } = useTheme()
  const isDarkTheme = themeType === 'dark'

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)

  const toggleTheme = useCallback(() => {
    setCurrentTheme?.(isDarkTheme ? 'light' : 'dark')
  }, [isDarkTheme, setCurrentTheme])

  const toggleIsSettingsOpen = useCallback(() => {
    setIsSettingsOpen((prev) => !prev)
  }, [])

  return (
    <div>
      <Button onClick={toggleIsSettingsOpen}>Settings</Button>
      {isSettingsOpen && (
        <SettingsWrapper>
          <ToggleCheckbox
            label='Change Theme'
            isChecked={isDarkTheme}
            toggleCheckbox={toggleTheme}
          />
          <Dropdown
            value={gameSize}
            text='Change game size'
            onSelect={onChangeGameSize}
            items={dropdownItems}
          />
        </SettingsWrapper>
      )}
    </div>
  )
}

export default Settings
