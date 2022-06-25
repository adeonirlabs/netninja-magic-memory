import { useState } from 'react'

import helmet from '~/assets/helmet.png'
import potion from '~/assets/potion.png'
import ring from '~/assets/ring.png'
import scroll from '~/assets/scroll.png'
import shield from '~/assets/shield.png'
import sword from '~/assets/sword.png'

import { Card } from '~/components/Card'
import type { CardProps } from '~/components/Card'

import './App.scss'

const cardImages = [
  { src: helmet },
  { src: potion },
  { src: ring },
  { src: scroll },
  { src: shield },
  { src: sword },
]

export function App() {
  const [cards, setCards] = useState<CardProps[]>([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }))
    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards)
  console.log(turns)

  return (
    <div className="App">
      <h1>Magic Memory</h1>
      <button onClick={shuffleCards}>New game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
