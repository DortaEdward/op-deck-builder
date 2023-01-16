import { api } from "../utils/api";
import Card from "../components/Card";
import Image from "next/image";

export default function DataBase() {
  const { data, isLoading } = api.card.getAllCards.useQuery();
  if (isLoading) return <>Loading</>
  if(!data) return <>No Data</>
  return (
    <div className="container dark:bg-slate-800 bg-slate-100 min-h-full h-full text-black dark:text-white">
      <div>
        <input type="text" placeholder="Search" />
      </div>
      {
        data.map(card => {
          return(
            <div key={card.id}>
        {/* card section */}
        <div className="flex gap-8 p-4 py-7 my-6 mx-4 bg-slate-50 dark:bg-slate-700">
          <Image
            src={`/images/${card?.image}` as string}
            alt={card?.name as string}
            width={160}
            height={120}
            className='rounded'
            />
            <div>
              {/* Top */}
              <div className="">
                <table>
                  <tbody>
                    <tr>
                      <td className="text-2xl">{card?.name}</td>
                      <td className="px-5">Set Number: <span className='text-lg'>{card?.setNumber}</span></td>
                    </tr>
                    <tr>
                      <td className="capitalize">Color: <span className='text-lg'>{card?.color}</span></td>
                      <td>Traits: {card?.traits}</td>
                    </tr>
                    <tr>
                      <td>Power: <span className='text-lg'>{card?.power}</span></td>
                      <td>Counter Power: <span className='text-lg'>{card?.counterPower === null ? 'None' : card?.counterPower}</span></td>
                    </tr>
                  </tbody>
                </table>
                <div>
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <p>Effect:</p>
                <p>{card?.effect}</p>
              </div>
            </div>
        </div>
      </div>
          )
        })
      }
      
          {
            JSON.stringify(data[0])
          }
      {/* <div className="flex flex-wrap justify-center gap-1">
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
            />
          )
        })}
      </div> */}
    </div>
  )
}