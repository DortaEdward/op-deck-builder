import Card from "../Card";
import type { CardType, DeckType } from "../../types/DeckBuilder";

type Props = {
  deck: DeckType,
  setActive?: any,
  removeFromDeck: any,
  leader: CardType,
  deckTotal: number,
  setLeader: any,
}

export default function Deck({ deck, setActive, setLeader, removeFromDeck, leader, deckTotal }: Props) {
  return (
    <div className="w-[50%] h-full bg-slate-800 rounded-lg p-2 overflow-auto shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex gap-4 mt-1 mb-3">
          <p>Deck Total: <span className="font-bold">{deckTotal}</span></p>
          <p>Leader: <span className="font-bold">0</span></p>
          <p>Characters: <span className="font-bold">0</span></p>
          <p>Event: <span className="font-bold">0</span></p>
        </div>
        <div className="grid lg:grid-cols-10 md:grid-cols-7 sm:grid-cols-5 grid-rows-5 gap-1">
          {
            deck
              ?
              Object.keys(deck).map((key, i) => {
                return (
                  <div key={i}>
                    <Card
                      card={deck[key]}
                      removeFromDeck={removeFromDeck}
                      setActive={setActive}
                    />
                  </div>
                )
              })
              :
              <></>
          }
        </div>
      </div>
      <div>
        {leader
          ?
          <div className="flex gap-2">
              <Card
                card={leader}
                removeFromDeck={removeFromDeck}
                removeLeader={setLeader}
              />
            <div className="ml-4">
              <p>Leader: {leader.name}</p>
              <small className="capitalize">Color: {leader.color.replace('/',' / ')}</small>
              <p className="text-[12px]">Effect: {leader.effect}</p>
              {/* <button type="button" onClick={()=>setLeader(null)} className="text-[10px] rounded bg-red-600 p-1">Remove Leader</button> */}
            </div>
          </div>

          : <>No Leader</>
        }
      </div>
    </div>
  )
}