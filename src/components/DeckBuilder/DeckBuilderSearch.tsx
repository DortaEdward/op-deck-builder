import { traits } from '../../data/trait';
import Card from '../Card';
type Props = {
  inputValue: string, setInputValue: any,
  cardData: any, setActive: any,
  addDeck: any, isLoading: boolean,
  color: string; setColor: any;
  cost: string; setCost: any;
  cardTypes: string; setCardTypes: any;
  power: string; setPower: any;
  counterPower: string; setCounterPower: any;
  trait: string; setTrait: any;
}

export default function DeckBuilderSearch({
  inputValue, setInputValue,
  cardData, setActive,
  addDeck, isLoading,
  color, cost,
  power, counterPower,
  trait, setColor,
  setCost, setPower,
  setCounterPower, setTrait,
  cardTypes, setCardTypes,
}: Props) {


  return (
    <div className="w-[30%] dark:bg-slate-800 bg-slate-50 text-black dark:text-white h-full rounded-lg flex flex-col overflow-hidden shadow-lg">
      {/* top */}
      <div className="p-2 flex flex-col items-center w-full">
        <div className="w-full p-2">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 w-full text-black outline-none rounded bg-slate-100 shadow"
          />
          <div className='w-full'>
            <div className='flex gap-2 my-2'>
              <div className='flex flex-col'>
                <label htmlFor="color">Color</label>
                <select
                  name="Color"
                  id='color'
                  className='dark:bg-slate-600 bg-slate-400 outline-none cursor-pointer p-1 rounded text-white'
                  value={color}
                  onChange={e => setColor(e.target.value)}
                >
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
                <select
                  name="cost"
                  className='dark:bg-slate-600 bg-slate-400 text-white outline-none cursor-pointer p-1 rounded'
                  value={cost}
                  onChange={e => setCost(e.target.value)}
                >
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
                <select
                  name="cardType"
                  className='dark:bg-slate-600 bg-slate-400 text-white outline-none cursor-pointer p-1 rounded'
                  value={cardTypes}
                  onChange={e => setCardTypes(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="leader">Leader</option>
                  <option value="character">Character</option>
                  <option value="event">Event</option>
                  <option value="stage">Stage</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap gap-1 mt-2'>
              <div className='flex flex-col'>
                <label htmlFor="power">Power</label>
                <select
                  name="power"
                  id="power"
                  className='rounded px-1 py-[4px] outline-none dark:bg-slate-600 bg-slate-400 text-white'
                  value={power}
                  onChange={e => setPower(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                  <option value="4000">4000</option>
                  <option value="5000">5000</option>
                  <option value="6000">6000</option>
                  <option value="7000">7000</option>
                  <option value="8000">8000</option>
                  <option value="9000">9000</option>
                  <option value="10000">10000</option>
                  <option value="11000">11000</option>
                  <option value="12000">12000</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="counterPower">Counter Power</label>
                <select
                  name="counterPower"
                  id="counterPower"
                  className='rounded px-1 py-[4px] outline-none dark:bg-slate-600 bg-slate-400 text-white'
                  onChange={e => setCounterPower(e.target.value)}
                  value={counterPower}
                >
                  <option value="all">All</option>
                  {/* <option value="null">Null</option> */}
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="trait">Trait</label>
                <select
                  name="trait"
                  id="trait"
                  className='rounded px-1 py-[4px] outline-none dark:bg-slate-600 bg-slate-400 text-white'
                  onChange={e => setTrait(e.target.value)}
                  value={trait}
                >
                  <option value="all">All</option>

                  {
                    traits.map(trait => {
                      return (
                        <>
                          <option key={trait} value={trait}>{trait}</option>
                        </>
                      )
                    })
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      {
        isLoading
          ? <div className='h-full w-full flex items-center justify-center'>
            <div id='card'>
              <div id='front' className="bg-[url('/images/card.png')] w-[190px] h-[268px] rounded animate-pulse"></div>
            </div>
          </div>
          :
          cardData
            ?
            <>
              <div className="px-2 overflow-auto flex flex-col">
                <p className="mb-2 font-medium">Results: {cardData.length} cards</p>
                <div>
                    {
                      JSON.stringify(cardData[0].cardType.name)
                    }
                  <div className=" grid grid-cols-5 gap-[2px]">
                    {
                      cardData
                        .filter((card: { name: string; }) => card.name.toLowerCase().includes(inputValue.toLowerCase()))
                        .filter((card: { color: string; }) => color !== 'all' ? card.color.toLowerCase().includes(color) : card)
                        .filter((card: { power: string; }) => power !== 'all' ? card.power?.toLowerCase().includes(power) : card)
                        // .filter((card: { counterPower: string; }) => counterPower !== 'all' ? card.counterPower?.toLowerCase().includes(counterPower) : card)
                        .filter((card: { cost: string; }) => cost !== 'all' ? card.cost?.toLowerCase().includes(cost) : card)
                        .filter((card: { traits: string; }) => trait !== 'all' ? card.traits?.toLowerCase().includes(trait.toLowerCase()) : card)
                        .filter((card: { cardType: string; }) => cardTypes !== 'all' ? card.cardType.name?.toLowerCase().includes(cardTypes.toLowerCase()) : card)

                        .map((card: any) => {
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
            :
            <>
              No card data
            </>
      }
    </div>
  )
}