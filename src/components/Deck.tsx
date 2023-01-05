import Image from "next/image";
import Card from "./Card";
type Props = {
  deck: any,
  setActive?: any,
  addDeck?: any,
}

export default function Deck({ deck, setActive, addDeck }: Props) {
  return (
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
                {/* <Image
                src={`/images/${deck[keyname].image}`}
                width={76} height={140}
                alt={deck[keyname].name}
                className=' rounded'
              /> */}
                <Card
                  setActive={setActive}
                  card={deck[keyname]}
                  addDeck={addDeck}
                />
                <p>{deck[keyname].qty}</p>
              </div>)
            })
            : <></>
        }
      </div>
    </div>
  )
}

