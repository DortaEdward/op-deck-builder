import { useEffect, useState } from 'react';

// Types
import type { CardType } from '../types/DeckBuilder';

// Components
import Deck from "../components/DeckBuilder/Deck";
import DeckBuilderSearch from "../components/DeckBuilder/DeckBuilderSearch";
import ActiveCard from "../components/DeckBuilder/ActiveCard";

//Trcp
import { api } from '../utils/api';
import { useSession } from 'next-auth/react';

// Component
export default function DeckBuilder() {
  // Internal State
  const [deck, setDeck] = useState<CardType[]>([]);
  const [inputValue, setInputValue] = useState('')
  const [active, setActive] = useState<string>('');
  const [leader, setLeader] = useState<CardType>();
  const [toggleCreate, setToggle] = useState<boolean>(false);

  const [color, setColor] = useState<string>('all');
  const [cost, setCost] = useState<string>('all');
  const [cardTypes, setCardTypes] = useState<string>('all');
  const [power, setPower] = useState<string>('all');
  const [counterPower, setCounterPower] = useState<string>('all');
  const [trait, setTrait] = useState<string>('all');

  const [deckName, setDeckName] = useState<string>()
  const [description, setDescription] = useState<string>()

  // Session
  const { data: session } = useSession();

  // Api
  const { data, isLoading } = api.card.getAllCards.useQuery();
  const createDeckMutation = api.deck.createDeck.useMutation();

  function removeFromDeck(id: string) {
    const inDeck = deck.findIndex(card => card.setNumber === id);
    if (inDeck >= 0) {
      setDeck(prev => prev.filter((_, i) => i !== inDeck))
    }
  }

  function addDeck(value: CardType) {
    console.log(value)
    if (deck.length >= 50) return;
    const cardCount = deck.filter(x => x === value).length;
    if (value.cardTypeId === "clcku3jcg000guayie2k1vpoh") {
      setLeader(value)
    }
    else if (cardCount < 4) {
      setDeck((prev) => [...prev, value])
    }
  };

  const onToggle = () => {
    if (!session) return;
    if (deck.length < 50) return;
    setToggle(true);
  }

  async function createDeck() {
    if (!leader) return;
    const payload = {
      name: deckName,
      deck: deck,
      userId: session?.user?.id,
      leaderImage: leader?.image,
      description: description,
    }
    try {
      createDeckMutation.mutate(payload);
    } catch (error) {
      console.log('There was an error?', error);
    }
  };

  // function formateDeck(){
  //   console.log('working')
  //   console.log(deck.reduce((a,v) => ({...a,[v]:v}),{}))
  // }


  return (
    <div className="flex w-full h-[660px] justify-center gap-4 px-6 my-4 relative">
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
        onToggle={onToggle}
      />
      <DeckBuilderSearch
        inputValue={inputValue}
        setInputValue={setInputValue}
        cardData={data}
        setActive={setActive}
        addDeck={addDeck}
        isLoading={isLoading}
        cardTypes={cardTypes}
        color={color}
        cost={cost}
        power={power}
        counterPower={counterPower}
        trait={trait}
        setColor={setColor}
        setCost={setCost}
        setPower={setPower}
        setCounterPower={setCounterPower}
        setTrait={setTrait}
        setCardTypes={setCardTypes}
      />
      {
        toggleCreate
          ?
          <div className='absolute top-0 left-0 w-screen min-h-[680px] bg-black/75 flex items-center justify-center '>
            <form className='outline py-6 rounded flex flex-col gap-2 bg-slate-800 w-2/5 justify-center'>
              <fieldset className='flex gap-2 mx-auto'>
                <p className='text-2xl w-[150px]'>Creator:</p>
                <input
                  type="text"
                  name="deckName"
                  id="deckName"
                  className='w-[230px] rounded outline-none px-3 text-black bg-white'
                  disabled
                  value={session?.user?.name || ''}
                />
              </fieldset>
              <fieldset className='flex gap-2 text-2xl mx-auto'>
                <label htmlFor="deckName" className='w-[150px]'>Deck Name:</label>
                <input
                  type="text"
                  name="deckName"
                  id="deckName"
                  className='w-[230px] rounded outline-none px-3 text-black text-sm'
                  placeholder='Enter Deck Name'
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                />
              </fieldset>
              <fieldset className='flex gap-2 text-lg mx-auto'>
                <label htmlFor="description" className='w-[150px] text-2xl'>Description:</label>
                <textarea
                  name="description"
                  id="description"
                  className='rounded outline-none px-3 text-black w-[230px]'
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />

              </fieldset>
              <button type='button' className='p-2 outline' onClick={() => createDeck()}>Create</button>
            </form>
            <div className='p-4 bg-red-300' onClick={() => setToggle(false)}>Close</div>
          </div>
          :
          <></>
      }
    </div>
  )
}