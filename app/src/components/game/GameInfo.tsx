import { FC } from 'react'
import Title from '../styled/Title'

interface GameInfoProps {
  winner: string | null
  isXNext: boolean
  isDraw?: boolean
}

const GameInfo: FC<GameInfoProps> = ({ winner, isDraw, isXNext }) => {
  let infoString: string

  switch (true) {
    case Boolean(winner):
      infoString = `Winner: ${winner}`
      break
    case Boolean(isDraw):
      infoString = 'No more moves'
      break
    default:
      infoString = `Next Player: ${isXNext ? 'X' : 'O'}`
  }

  return <Title as='h2'>{infoString}</Title>
}

export default GameInfo
