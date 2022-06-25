import cover from '~/assets/cover.png'

import './Card.scss'

export type CardProps = {
  src: string
  id: number
}

type Props = {
  card: CardProps
}

export const Card = ({ card }: Props) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={cover} alt="card back" />
      </div>
    </div>
  )
}
