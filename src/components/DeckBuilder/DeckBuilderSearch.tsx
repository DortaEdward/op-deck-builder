import type { CardType } from '../../types/DeckBuilder';
import Card from '../Card';
type Props = {
  inputValue: any,
  setInputValue: any,
  cardData: any,
  setActive: any,
  addDeck: any,
  isLoading: boolean,
}

export default function DeckBuilderSearch({ inputValue, setInputValue, cardData, setActive, addDeck, isLoading }: Props) {

  return (
    <div className="w-[30%] bg-slate-800 h-full rounded-lg flex flex-col overflow-hidden shadow-lg">
      {/* top */}
      <div className="p-2 flex flex-col items-center w-full">
        <div className="w-full p-2">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 w-full text-black outline-none rounded"
          />
          <div className='w-full'>
            <p>Filters:</p>
            <div className='flex gap-2'>
              <div className='flex flex-col'>
                <label htmlFor="color">Color</label>
                <select name="Color" id='color' className='bg-slate-600 outline-none cursor-pointer p-1 rounded'>
                  <option value="all">All</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="purple">Purple</option>
                  <option value="blue">Blue</option>
                  <option value="black">Black</option>
                  <option value="yellow">Yellow</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="cost">Cost</label>
                <select name="cost" className='bg-slate-600 outline-none cursor-pointer p-1 rounded'>
                  <option value="all">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="cardType">Card Type</label>
                <select name="cardType" className='bg-slate-600 outline-none cursor-pointer p-1 rounded'>
                  <option value="all">All</option>
                  <option value="leader">Leader</option>
                  <option value="character">Character</option>
                  <option value="event">Event</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap gap-1 mt-2 text-black'>
              <div>
                <input
                  className='rounded px-1 py-[4px] outline-none'
                  type="number"
                  placeholder='Power'

                />
              </div>
              <div>
                <input
                  className='rounded px-1 py-[4px] outline-none'
                  type="number"
                  placeholder='Counter Power'

                />
              </div>
              <div>
                <input
                  className='rounded px-1 py-[4px] outline-none'
                  type="text"
                  placeholder='Trait'

                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      {
        isLoading
          ? <div className='h-full w-full flex items-center justify-center'>
              <p>loading</p>
            </div>
          :
          <>
            <div className="px-2 overflow-auto flex flex-col">
              <p className="mb-2 font-medium">Results: {cardData.length} cards</p>
              <div>
                <div className=" grid grid-cols-5 gap-[2px]">
                  {
                    cardData.filter((card: { name: string; }) => card.name.toLowerCase().includes(inputValue)).map((card: CardType) => {
                      return (
                        <div key={card.setNumber + card.cardIndex}>
                          <Card
                            card={card}
                            setActive={setActive}
                            addDeck={addDeck}
                          />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className=" w-full my-2">
            </div>
          </>
      }
    </div>
  )
}