import { api } from "../utils/api";
import Image from "next/image";
import Card from "../components/Card";
export default function Decks() {
  const { data, isLoading } = api.deck.getAllDecks.useQuery();

  if (isLoading) return;

  return (
    <div>
      <h1>
        Decks
      </h1>
      <div>
        {
          data?.map(deck => {
            return (
              <div key={deck.id}>
                <Image
                  src={`/images/${deck.leaderImage}`}
                  width={80}
                  height={120}
                  alt={'leader'}
                />
                <p>{deck.name}</p>
                <p>{deck.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}