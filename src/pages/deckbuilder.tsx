import Image from "next/image";
import { useState } from 'react';
import cardData from '../data/cards.json';

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
      <div className="w-[20%] h-[600px] outline rounded-lg p-2 flex flex-col items-center gap-2">
        <div className="flex flex-wrap items-center gap-1">
          {
            active
              ?
              <div className="flex flex-col justify-center w-full">
                <Image
                  src={`/images/${active.image}`}
                  width={180}
                  height={150}
                  alt={active.name}
                  className=' rounded w-4/5 mx-auto my-2'
                />
                <p className='text-lg font-medium text-center'>{active.name}</p>
                <div className="flex gap-2 mx-auto">
                  {
                    active.color.split('/').map(color => {
                      return (
                        <p key={color} className='capitalize'>
                          {color}
                        </p>
                      )
                    })
                  }
                </div>
                <div className="overflow-auto">
                  <p className="bg-slate-700 p-2 rounded-lg">{active.effect}</p>
                </div>
              </div>
              : <></>
          }
        </div>
      </div>
      {/* mid */}
      <div className="w-[60%] h-[600px] outline rounded-lg p-2 overflow-auto">
        <div className="flex gap-4">
          <p>Leader: 0</p>
          <p>Characters: 0</p>
          <p>Event: 0</p>
          <p>Don: 0</p>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          {
            deck
              ? Object.keys(deck).map((keyname, i) => {
                return (<div key={i}>
                  <Image
                    src={`/images/${deck[keyname].image}`}
                    width={76} height={140}
                    alt={deck[keyname].name}
                    className=' rounded'
                  />
                  <p>{deck[keyname].qty}</p>
                </div>)
              })
              : <></>
          }
        </div>
      </div>

      {/* Search */}
      <div className="w-[20%] h-[600px] outline rounded-lg flex flex-col items-center justify-between overflow-hidden">
        <div className="p-2 flex flex-col items-center gap-4">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="p-2 w-2/3 text-black outline-none"
            />
            <button>Search</button>
          </div>
        </div>
        <div className="px-2 overflow-auto relative">
          <p className="my-2 font-medium sticky top-0 bg-slate-900 py-1">Results: {cardData.length} cards</p>
          <div>
            <div className=" grid grid-cols-4 gap-1 py-3">
              {
                cardData.filter(card => card.name.toLowerCase().includes(inputValue)).map((card) => {
                  return (
                    <div key={card.setName + card.cardIndex}>
                      <Image
                        onMouseEnter={() => setActive(card)}
                        src={`/images/${card.image}`}
                        alt={card.setId}
                        width={120}
                        height={160}
                        className=' rounded'
                        // onClick={() => addToODeck(card)} 
                        onClick={() => addDeck(card)}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className=" w-full my-1">
        </div>
      </div>
    </div>
  )
}


{/* <div className="flex gap-4">
  <fieldset className="flex gap-1 items-center">
    <label htmlFor="card_type">Card Type</label>
    <select name="card_type" id='card_type' className="h-[40px] text-black outline-none rounded-lg">
      <option value="all">All</option>
      <option value="leader">Leader</option>
      <option value="character">Charcter</option>
      <option value="event">Event</option>
    </select>
  </fieldset>
  <fieldset className="flex gap-1 items-center">
    <label htmlFor="color">Color</label>
    <select name="color" id='color' className="h-[40px] text-black outline-none rounded-lg">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="yellow">Yellow</option>
      <option value="black">Black</option>
    </select>
  </fieldset>
  <fieldset className="flex gap-1 items-center">
    <label htmlFor="card_type">Card Type</label>
    <select name="card_type" id='card_type' className="h-[40px] text-black outline-none rounded-lg">
      <option value="leader">Leader</option>
      <option value="character">Charcter</option>
      <option value="event">Event</option>
    </select>
  </fieldset>
</div> */}