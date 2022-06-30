import cover from '~/assets/cover.png'

import './Card.scss'

export type CardProps = {
  id: number
  src: string
  matched: boolean
}

type Props = {
  card: CardProps
  flipped: boolean
  onChoice: (card: CardProps) => void
}

export const Card = ({ card, flipped, onChoice }: Props) => {
  const handleClick = () => {
    onChoice(card)
  }

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} />
        <img className="back" src={cover} onClick={handleClick} />
      </div>
    </div>
  )
}
