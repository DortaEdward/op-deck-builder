// import { api } from "../utils/api";
import Card from "../components/Card";

export default function DataBase() {
  // const { data, isLoading } = api.card.getAllCards.useQuery();

  // if (isLoading) return <>Loading</>
  // if(!data) return <>No Data</>
  return (
    <div className="container bg-slate-700 min-h-full h-full">
      d
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