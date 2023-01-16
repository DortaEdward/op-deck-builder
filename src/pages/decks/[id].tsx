import { useRouter } from "next/router";
import Card from "../../components/Card";
import Image from "next/image";
import { api } from "../../utils/api";
import DeckViewer from "../../components/DeckViewer/DeckViewer";
export default function Deck() {

  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = api.deck.getDeck.useQuery(id);

  if (isLoading) return <>Loading</>

  return (
    <div className="flex h-full justify-center">
      <div>
        <h1 className="text-2xl">Deck Name: {data?.name}</h1>
        <div className="flex gap-1">
          <p>Leader:</p>
          <Image src={`/images/${data?.leaderImage}`} width={60} height={180} alt='Leader' />
        </div>
      </div>
      <DeckViewer data={data} />
    
      {/* {JSON.stringify(data)} */}
    </div>
  )
}