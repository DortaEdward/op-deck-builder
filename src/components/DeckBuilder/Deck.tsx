import Image from "next/image";
import Card from "../Card";
import { CardType, DeckType } from "../../types/DeckBuilder";

type Props = {
  deck: DeckType,
  setActive?: any,
  addDeck?: any,
}

export default function Deck({ deck, setActive, addDeck }: Props) {
  return (
    <div className="w-[60%] h-[600px] outline rounded-lg p-2 overflow-auto shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex gap-4">
          <p>Leader: 0</p>
          <p>Characters: 0</p>
          <p>Event: 0</p>
          <p>Don: 0</p>
        </div>
        <div className="grid lg:grid-cols-10 md:grid-cols-7 sm:grid-cols-5 gap-1">
          {
            deck
            ?
              Object.keys(deck).map((key, i) => {
                return(
                  <div key={i}>
                    <Card
                      card={deck[key]}
                    />
                  </div>
                )
              })
            :
              <></>
          }
        </div>
      </div>
      <div>Leader</div>
    </div>
  )
}




// <div className="flex flex-wrap items-center gap-1">
// {
//   deck
//     ? Object.keys(deck).map((keyname, i) => {
//       return (

//         <div key={i}>
//           <Card
//             setActive={setActive}
//             card={deck[keyname]}
//             addDeck={addDeck}
//           />
//           <p>{deck[keyname].qty}</p>
//         </div>)
//     })
//     : <></>
// }
// </div>