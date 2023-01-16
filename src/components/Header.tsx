/* eslint-disable @next/next/no-img-element */
import { MdExpandMore, MdClose } from 'react-icons/md';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from 'react';
export default function Header() {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center justify-between px-6 h-[92px] dark:text-white text-black dark:bg-slate-800 bg-slate-50">
      <div className="flex items-center gap-2">
        <Link href='/' className='font-bold text-2xl'>Haki Builder</Link>
      </div>
      <div className='flex items-center gap-1'>
        <div className='flex items-center justify-center gap-3'>
          <div className='md:flex hidden items-center justify-center gap-3 mr-3'>
            <Link href={'/deckbuilder'} className='hover:underline underline-offset-8 dark:text-gray-400 transition font-medium'>Deck Builder</Link>
            {/* <Link href={'/database'} className='hover:underline underline-offset-8 dark:text-gray-400 transition font-medium'>Database</Link> */}
            <Link href={'/decks'} className='hover:underline underline-offset-8 dark:text-gray-400 transition font-medium' >Decks</Link>
          </div>
          <div className='relative'>
            {
              session
                ?
                <div className='flex items-center'>
                  <div className='flex items-center gap-3 dark:bg-slate-700 bg-slate-200 h-12 px-3 rounded-l-lg'>
                    <p className='text-lg md:flex hidden'>Welcome, <span className='font-bold'>{session?.user?.name}</span></p>
                    <img src={session?.user?.image as string} alt="User" className='w-8 rounded-full' />
                  </div>
                  <div className='dark:bg-slate-900 bg-slate-300 h-12 flex items-center rounded-r-lg cursor-pointer transition'>
                    {
                      toggle
                        ?
                        <MdClose size={24} className={'w-[48px]'} onClick={() => setToggle(prev => !prev)} />
                        :
                        <MdExpandMore size={32} className={'w-[48px]'} onClick={() => setToggle(prev => !prev)} />
                    }
                    {
                      toggle
                        ?
                        <div className='absolute right-0 w-40 top-[4.3rem] dark:bg-slate-800 bg-slate-50 flex flex-col gap-4 items-center z-[100] transition'>
                          <div className='md:hidden flex-col gap-4 items-center flex'>
                            <Link onClick={() => setToggle(false)} href={'/deckbuilder'} className='py-4 hover:underline'>Deck Builder</Link>
                            <Link onClick={() => setToggle(false)} href={'/database'} className='py-4 hover:underline'>Database</Link>
                            <Link onClick={() => setToggle(false)} href={'/decks'} className='py-4 hover:underline'>Decks</Link>
                          </div>

                          <Link onClick={() => setToggle(false)} href={`/user/${session.user?.id}`} className='py-4 hover:underline'>View Decks</Link>
                          <Link onClick={() => setToggle(false)} href={'/settings'} className='py-4 hover:underline'>Setting</Link>
                          <div onClick={() => signOut()} className='py-4 hover:underline'>Sign Out</div>
                        </div>
                        :
                        <></>
                    }
                  </div>
                </div>
                :
                <div className='flex items-center py-2 px-4 rounded dark:bg-slate-700 bg-slate-300 cursor-pointer transition'>
                  <p onClick={() => signIn()}>Sign In</p>
                </div>
            }
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
    </div >
  )
}



// <div className='bg-slate-600 flex items-center py-2 px-4'>
// <p className='text-lg'>Welcome, <span className='font-bold'>{session?.user?.name}</span></p>
{/* <img src={session?.user?.image as string} alt="User" className='w-8 rounded-full' /> */ }
// </div>
// <div className='flex items-center justify-center gap-2 cursor-pointer rounded-lg'>
// <div className='bg-slate-700'>
//   {
//     toggle
//       ? <MdExpandLess size={32}
//         onClick={() => setToggle(prev => !prev)}
//       />
//       : <MdExpandMore size={32}
//         onClick={() => setToggle(prev => !prev)}
//       />

//   }
// </div>
// </div>