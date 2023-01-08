import { useState } from 'react';

// Card Json need to be replaced when cards are in db
import cardData from '../data/cards.json';

// Components
import Deck from "../components/DeckBuilder/Deck";
import DeckBuilderSearch from "../components/DeckBuilder/DeckBuilderSearch";
import ActiveCard from "../components/DeckBuilder/ActiveCard";

export default function DeckBuilder() {
  const [deck, setDeck] = useState({});
  const [deckTotal, setDeckTotal] = useState(0);
  const [inputValue, setInputValue] = useState('')
  const [active, setActive] = useState<string>('');

  function checkInDeck(id: string) {
    return Object.keys(deck).findIndex(key => key === id);
  }

  const addDeck = (value: any) => {
    if (deckTotal >= 50) return;
    const inDeck = checkInDeck(value.setNumber);
    if (inDeck === -1) {
      console.log(value)
      setDeck(prev => ({
        ...prev,
        [value.setNumber]: {
          ...value,
          qty: 1
        },
      }))
      setDeckTotal(prev => prev + 1)
    } else {
      const qty = deck[value.setNumber].qty + 1
      if (qty > 4) return;
      setDeck(prev => ({
        ...prev,
        [value.setNumber]: {
          ...value,
          qty: qty
        },
      }))
      setDeckTotal(prev => prev + 1)
    }
    // console.log('deck?', deck)
  };

  return (
    <div className="flex w-full h-full justify-center gap-4 px-6">
      <ActiveCard
        active={active}
      />
      <Deck
        deck={deck}
        setActive={setActive}
        addDeck={addDeck}
      />
      <DeckBuilderSearch
        inputValue={inputValue}
        setInputValue={setInputValue}
        cardData={cardData}
        setActive={setActive}
        addDeck={addDeck}
      />
    </div>
  )
}