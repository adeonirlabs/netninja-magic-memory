import { useState } from 'react'
import './App.scss'

const cardImages = [
  { src: '/assets/helmet.png' },
  { src: '/assets/potion.png' },
  { src: '/assets/ring.png' },
  { src: '/assets/scroll.png' },
  { src: '/assets/shield.png' },
  { src: '/assets/sword.png' },
]

type Card = {
  src: string
  id: number
}

export function App() {
  const [cards, setCards] = useState<Card[]>([])
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
    </div>
  )
}
