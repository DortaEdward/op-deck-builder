import { useState } from 'react';

// Card Json need to be replaced when cards are in db
import cardData from '../data/cards.json';

// Types
import type { CardType } from '../types/DeckBuilder';

// Components
import Deck from "../components/DeckBuilder/Deck";
import DeckBuilderSearch from "../components/DeckBuilder/DeckBuilderSearch";
import ActiveCard from "../components/DeckBuilder/ActiveCard";

//Trcp
import { api } from '../utils/api';

// Component
export default function DeckBuilder() {
  // Internal State
  const [deck, setDeck] = useState<CardType[]>([]);
  const [inputValue, setInputValue] = useState('')
  const [active, setActive] = useState<string>('');

  const {data, isLoading} = api.card.getAllCards.useQuery({take:40})

  
  // function checkInDeck(id: string) {
  //   return deck.some(card => card.setNumber === id)
  // }

  const addDeck = (value: any) => {
    if (deck.length >= 50) return;
    const cardCount = deck.filter(x => x === value).length;
    if(cardCount < 4) {
      setDeck((prev) => [...prev,value])
    }
  };

  function formateDeck(){
    console.log('working')
    console.log(deck.reduce((a,v) => ({...a,[v]:v}),{}))
  }

  // if(isLoading) return<>loading</>

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
          cardData={data}
          setActive={setActive}
          addDeck={addDeck}
          isLoading={isLoading}
        />
    </div>
  )
}