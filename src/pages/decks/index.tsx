import { api } from "../../utils/api";
import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card";
import DeckViewer from "../../components/DeckViewer/DeckViewer";
export default function Decks() {
  const { data, isLoading } = api.deck.getAllDecks.useQuery();

  if (isLoading) return;

  return (
    <div className="w-full flex flex-col items-center">
      <div>
        Filter Section
      </div>
      <div>
        {/* <DeckViewer /> */}
        {
          data?.map(deck => {
            return (
              <Link href={`/decks/${deck.id}`} key={deck.id} className='flex'>
                <Image
                  src={`/images/${deck.leaderImage}`}
                  width={140}
                  height={100}
                  alt={'leader'}
                />
                <div>
                  <p>{deck.name}</p>
                  <p>{deck.description}</p>
                  <div className="flex gap-1 items-center">
                    <img src={deck.author.image as string} alt='Deck Owner' className="rounded-full w-10" />
                    <p>{deck.author.name}</p>
                  </div>

                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}