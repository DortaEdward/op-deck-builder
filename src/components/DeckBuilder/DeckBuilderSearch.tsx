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
    <div className="w-[20%] h-[600px] outline rounded-lg flex flex-col overflow-hidden shadow-lg">
      <div className="p-2 flex flex-col items-center gap-4 w-full">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 w-full text-black outline-none rounded"
          />
        </div>
      </div>
      {
        isLoading
          ? <>loading</>
          :
          <>
            <div className="px-2 overflow-auto flex flex-col">
              <p className="my-2 font-medium sticky top-0 bg-slate-900 py-1">Results: {cardData.length} cards</p>
              <div>
                <div className=" grid grid-cols-4 gap-[2px]">
                  {
                    cardData.filter(card => card.name.toLowerCase().includes(inputValue)).map((card) => {
                      return (
                        <div key={card.setName + card.cardIndex}>
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