import cover from '~/assets/cover.png'

import './Card.scss'

export type CardProps = {
  id: number
  src: string
  matched: boolean
}

type Props = {
  card: CardProps
  onChoice: (card: CardProps) => void
}

export const Card = ({ card, onChoice }: Props) => {
  const handleClick = () => {
    onChoice(card)
  }

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} />
        <img className="back" src={cover} onClick={handleClick} />
      </div>
    </div>
  )
}
