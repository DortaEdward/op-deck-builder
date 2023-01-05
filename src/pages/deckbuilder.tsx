import { useState } from 'react';

// Card Json need to be replaced when cards are in db
import cardData from '../data/cards.json';

// Components
import Deck from "../components/Deck";
import DeckBuilderSearch from "../components/DeckBuilderSearch";
import ActiveCard from "../components/ActiveCard";

export default function DeckBuilder() {
  const [deck, setDeck] = useState({});
  const [inputValue, setInputValue] = useState('')
  const [active, setActive] = useState<string>('');
  
  function checkInDeck(id: string) {
    return Object.keys(deck).findIndex(key => key === id);
  }

  const addDeck = (value: any) => {
    const inDeck = checkInDeck(value.setId);
    console.log('deck before update?', deck);
    if (inDeck === -1) {
      setDeck(prev => ({
        ...prev,
        [value.setId]: {
          ...value,
          qty: 1
        },
      }))
    } else {
      const qty = deck[value.setId].qty + 1
      if (qty > 4) return;
      setDeck(prev => ({
        ...prev,
        [value.setId]: {
          ...value,
          qty: qty
        },
      }))
    }
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