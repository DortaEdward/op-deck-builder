import { useState } from 'react';

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
  const [leader, setLeader] = useState<CardType>();

  const { data, isLoading } = api.card.getAllCards.useQuery()

  const removeFromDeck = (id: string) => {
    // const inDeck = deck.some(card => card.setNumber === id)
    const inDeck = deck.findIndex(card => card.setNumber === id);
    if(inDeck >= 0){
      setDeck(prev => prev.filter((_,i) => i !== inDeck))
      
    }
  }

  const addDeck = (value: CardType) => {
    if (deck.length > 50) return;
    const cardCount = deck.filter(x => x === value).length;
    if(value.cardTypeId === "clcku3jcg000guayie2k1vpoh"){
      setLeader(value)
    }
    else if(cardCount < 4) {
      setDeck((prev) => [...prev,value])
    }
    
  };

  // function formateDeck(){
  //   console.log('working')
  //   console.log(deck.reduce((a,v) => ({...a,[v]:v}),{}))
  // }


  return (
    <div className="flex w-full h-[660px] justify-center gap-4 px-6 my-4">
      <ActiveCard
        active={active}
      />
      <Deck
        deck={deck}
        setActive={setActive}
        addDeck={addDeck}
        removeFromDeck={removeFromDeck}
        leader={leader}
        deckTotal={deck.length}
        setLeader={setLeader}
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