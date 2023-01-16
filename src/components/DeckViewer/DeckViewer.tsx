import Card from "../Card"
type Props = {
  data: any
}

export default function DeckViewer({data}: Props){
  return(
      <div>

    <div className="grid grid-cols-10 gap-1">
    {
      
      
      data?.deck.map((card) => {
        return (
          <Card key={card.id} card={card} />
          )
        })
      }
  </div>
      </div>
  )
}