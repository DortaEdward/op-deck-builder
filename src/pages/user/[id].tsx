import { useRouter } from "next/router";
import { api } from "../../utils/api";
import Image from "next/image";
import Link from "next/link";
export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = api.deck.getUsersDecks.useQuery(id as string);

  if (isLoading) return <div>Load...</div>

  return (
    <div className="flex gap-2 flex-col items-center">
      <h1 className="text-3xl my-4">Decks</h1>
      <div className="flex gap-3 flex-wrap items-center justify-center">
        {
          data?.map(deck => {
            return (
              <div key={deck.id} className=" bg-slate-700/30 p-2 rounded my-2 w-[320px] h-[210px] flex items-center justify-center">
                <div className="flex gap-1">
                  <Image
                    className="rounded"
                    src={`/images/${deck?.leaderImage}`}
                    width={140}
                    height={180}
                    alt='Leader' />
                  <div className="flex flex-col justify-between ml-1">
                    <div className="flex flex-col gap-2">
                      <p className="text-lg">{deck.name}</p>
                      {/* <p>{deck.description?.length < 40 ? deck.description : `${deck.description?.slice(0, 47)} ...`}</p> */}
                      <p>{deck.description}</p>
                    </div>
                    <Link href={`/decks/${deck.id}`} className="relative">

                      <button className="absolute right-0 bottom-0 bg-blue-500 p-1 rounded">
                        Look at deck
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}