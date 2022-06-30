import { useCallback, useEffect, useState } from 'react'

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
  { src: helmet, matched: false },
  { src: potion, matched: false },
  { src: ring, matched: false },
  { src: scroll, matched: false },
  { src: shield, matched: false },
  { src: sword, matched: false },
]

export function App() {
  const [cards, setCards] = useState<CardProps[]>([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState<CardProps | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<CardProps | null>(null)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }))
    setCards(shuffledCards)
    setTurns(0)
  }

  const resetTurns = useCallback(() => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prev) => prev + 1)
  }, [])

  const handleChoice = (card: CardProps) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) =>
          prev.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        )

        resetTurns()
      } else {
        setTimeout(() => resetTurns(), 500)
      }
    }
  }, [choiceOne, choiceTwo, resetTurns])

  return (
    <div className="App">
      <h1>Magic Memory</h1>
      <button onClick={shuffleCards}>New game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  )
}
