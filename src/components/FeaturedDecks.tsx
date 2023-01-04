import Image from "next/image";
export default function FeaturedDecks() {
  const dummyData = [
    {
      id: 1,
      leader: 'Tragalgar Law',
      name:'Law Control',
      author: 'Tengen',
      description: 'This is the decks description',
      leaderImage: '/images/47.png'
    },
    {
      id: 2,
      leader: 'Monkey D. Luffy',
      name:'Straw hat spam',
      author: 'Tengen',
      description: 'This is the decks description',
      leaderImage: '/images/1.png'
    },
    {
      id: 3,
      leader: 'Zoro',
      name:'Zoro Rush',
      author: 'Tengen',
      description: 'This is the decks description',
      leaderImage: '/images/1.png'
    },
    {
      id: 4,
      leader: 'Croc',
      name:'Croc defence',
      author: 'Tengen',
      description: 'This is the decks description',
      leaderImage: '/images/62.png'
    },
    {
      id: 5,
      leader: 'Doflamingo',
      name:'Seven Warlords',
      author: 'Tengen',
      description: 'This is the decks description',
      leaderImage: '/images/62.png'
    },
  ]
  return (
    <div className="flex flex-wrap w-full justify-between">
      {
        dummyData.map(deck => {
          return (
            <div key={deck.id} className="w-[200px] h-[160px] shadow-lg relative rounded overflow-hidden hover:scale-105 transition cursor-pointer">
              <Image
                src={deck.leaderImage}
                className='absolute z-1 top-0 left-0'
                fill
                objectFit="cover"
                objectPosition="0 0px"
                alt={"Deck Leader"}
              />
              <div className="z-[100] bg-black/80 absolute bottom-0 w-full p-2">
                <p className='font text-lg'>{deck.name}</p>
                <small className="italic">{deck.leader}</small>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export function FeaturedDeck() {
  return (
    <div>
      Featured Deck
    </div>
  )
}