import Card from "../Card"
import type { CardType } from "../../types/DeckBuilder"
type Props = {
  active: CardType,
}

export default function ActiveCard({ active }: Props) {
  return (
    <div className="w-[20%] h-full bg-slate-800 rounded-lg p-2 flex flex-col items-center gap-2 shadow-lg">
      <div className="flex flex-wrap items-center gap-1">
        {
          active
            ?
            <div className="flex flex-col justify-center w-full">
              <Card
                card={active}
                className={'rounded w-4/5 mx-auto my-2'}
              />
              <p className='text-lg font-medium text-center'>{active.name}</p>
              <div className="flex gap-2">
                {
                  active.color.split('/').map((color: string) => {
                    return (
                      <p key={color} className='capitalize'>
                        {color}
                      </p>
                    )
                  })
                }
              </div>
              <div>Set Number: {active.setNumber}</div>
              <div>Cost: {active.cost}</div>
              <div>Power: {active.power}</div>
              <div>Counter Power: {active.counterPower}</div>
              <div>Traits: {active.traits}</div>
              <div className="overflow-auto">
                <p className="bg-slate-700 p-2 rounded-lg text-sm md:text-base">{active.effect}</p>
              </div>
            </div>
            : <></>
        }
      </div>
    </div>
  )
}
