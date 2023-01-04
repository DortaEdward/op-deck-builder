import Image from "next/image";
import { useState } from 'react';
import cardData from '../data/cards.json';

/*
  deck type
  card
  quantity
*/

export default function DeckBuilder() {
  const [deck, setDeck] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('')
  const [active, setActive] = useState<string>('');
  const addToDeck = (card:any) => {
    setDeck(prev => [...prev, card])
  };

  return (
    <div className="flex w-full h-full justify-center gap-4 px-6">
      <div className="w-[20%] h-[600px] outline rounded-lg p-2 overflow-auto">
        <div className="flex gap-4">
          <p>Display Card Section</p>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          {
            active
            ? 
              <div className="flex flex-col justify-center w-full">
                <Image src={`/images/${active.image}`} width={180} height={150} alt={active.name} className=' rounded' />
                <p>{active.name}</p>
                <p>{active.color}</p>
                <p>{active.effect}</p>
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
              ? deck.map(card => {
                return (
                  <div key={card.setId}>
                    <Image
                      src={`/images/${card.image}`}
                      width={76} height={140}
                      alt={card.name} />
                  </div>
                )
              })
              :
              <></>
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
          <div className="flex gap-4">
            {/* <fieldset className="flex gap-1 items-center">
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
            </fieldset> */}
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
                        onClick={() => addToDeck(card)}  
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