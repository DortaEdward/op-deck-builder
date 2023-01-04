/* eslint-disable @next/next/no-img-element */
import { MdMenu, MdOutlineAccountCircle, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from 'react';
export default function Header() {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev)
  }
  console.log('Session?', session)
  return (
    <div className="flex items-center justify-between px-6 h-[92px] bg-slate-800">
      <div className="flex items-center gap-2">
        <Link href='/' className='font-bold text-2xl'>Haki Builder</Link>
      </div>
      <div className='flex items-center gap-1'>
        {
          session
            ?
            <div className='flex items-center justify-center gap-2  relative'>
              <p className='text-lg'>Welcome, <span className='font-bold'>{session?.user?.name}</span></p>
              <div className='flex items-center justify-center gap-2 hover:bg-slate-600 py-1 px-2 cursor-pointer rounded-lg'>

                <img src={session?.user?.image as string} alt="User" className='w-11 rounded-full' />
                {
                  toggle
                    ?
                    <div className='absolute right-0 w-40 top-[4.5rem] bg-slate-800 flex flex-col gap-4 items-center z-[100]'>
                      <Link href={'/deckbuilder'} className='py-4'>DeckBuilder</Link>
                      <Link href={'/decks'} className='py-4'>View Decks</Link>
                      <Link href={'/settings'} className='py-4'>Setting</Link>
                      <div onClick={() => signOut()} className='py-4'>Sign Out</div>
                    </div>
                    :
                    <></>
                }
                {
                  toggle
                    ? <MdExpandLess size={28}
                      onClick={handleToggle}
                    />
                    : <MdExpandMore size={28}
                      onClick={handleToggle}
                    />

                }
              </div>
            </div>
            : <p onClick={() => signIn()}>Sign In</p>
        }
      </div>
    </div >
  )
}



/**
      <div className='w-full col-start-1 col-span-4 row-start-2 lg:col-start-2 lg:col-span-2 lg:row-start-1'>
        <input
          type="text"
          placeholder='Search for cards'
          className='w-full h-9 p-1 text-black ' />
      </div> 

 */