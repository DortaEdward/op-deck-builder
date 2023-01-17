import Card from "../Card"
import type { CardType } from "../../types/DeckBuilder"
// type Props = {
//   active: CardType,
// }

export default function ActiveCard({ active }: any) {
  return (
    <div className="w-[20%] h-full bg-slate-50 text-black dark:text-white dark:bg-slate-800 rounded-lg p-2 flex flex-col items-center gap-2 shadow-lg">
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

              </div>
              <table className="text-sm my-1">
                <tbody>
                  <tr className="w-full">
                    <td className="text-sm ">
                      Set Number: {active.setNumber}
                    </td>
                  </tr>
                  <tr className="w-full">
                    <td>
                      Cost: {active.cost}
                    </td>
                    <td className="flex gap-1">
                      Color:           {
                        active.color.split('/').map((color: string) => {
                          return (
                            <p key={color} className='capitalize'>
                              {color}
                            </p>
                          )
                        })
                      }
                    </td>
                  </tr>
                  <tr className="w-full">
                    <td>Power: {active.power}</td>
                    <td>CP: {active.counterPower}</td>

                    {/* <p>{active.cardTypeId}</p> */}
                  </tr>
                  <tr className="w-full">
                    <td className="w-full">Traits: {active.traits}</td>
                    {/* <td>Card Type: {active.cardType?.name}</td> */}
                  </tr>
                </tbody>
              </table>
              <div>
                <p className="dark:bg-slate-700 bg-slate-200 overflow-auto  h-[180px] py-2 px-1 rounded-lg text-sm">{active.effect}</p>
              </div>
            </div>
            : <></>
        }
      </div>
    </div>
  )
}
