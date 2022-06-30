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
  disabled: boolean
  onChoice: (card: CardProps) => void
}

export const Card = ({ card, flipped, disabled, onChoice }: Props) => {
  const handleClick = () => {
    !disabled && onChoice(card)
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
