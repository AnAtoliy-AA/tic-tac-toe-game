import { FC } from 'react'
import Title from '../styled/Title'

interface GameInfoProps {
  winner: string | null
  isXNext: boolean
}

const GameInfo: FC<GameInfoProps> = ({ winner, isXNext }) => {
  const infoString = winner
    ? 'Winner: ' + winner
    : 'Next Player: ' + (isXNext ? 'X' : 'O')

  return <Title as='h4'>{infoString}</Title>
}

export default GameInfo
