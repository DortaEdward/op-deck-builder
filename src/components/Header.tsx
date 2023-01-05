/* eslint-disable @next/next/no-img-element */
import { MdMenu, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from 'react';
export default function Header() {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center justify-between px-6 h-[92px] bg-slate-800">
      <div className="flex items-center gap-2">
        <Link href='/' className='font-bold text-2xl'>Haki Builder</Link>
      </div>
      <div className='flex items-center gap-1'>
        <div className='flex items-center justify-center gap-3  relative'>
          <Link href={'/deckbuilder'} className='hover:text-white text-gray-400 transition'>Deck Builder</Link>
          <Link href={'/decks'} className='hover:text-white text-gray-400 transition' >Decks</Link>
          {
            session
              ?
              <>
                <p className='text-lg'>Welcome, <span className='font-bold'>{session?.user?.name}</span></p>
                <div className='flex items-center justify-center gap-2 hover:bg-slate-600 py-1 px-2 cursor-pointer rounded-lg'>

                  <img src={session?.user?.image as string} alt="User" className='w-11 rounded-full' />
                  {
                    toggle
                      ?
                      <div className='absolute right-0 w-40 top-[4.5rem] bg-slate-800 flex flex-col gap-4 items-center z-[100]'>
                        <Link onClick={() => setToggle(false)} href={'/deckbuilder'} className='py-4'>DeckBuilder</Link>
                        <Link onClick={() => setToggle(false)} href={'/decks'} className='py-4'>View Decks</Link>
                        <Link onClick={() => setToggle(false)} href={'/settings'} className='py-4'>Setting</Link>
                        <div onClick={() => signOut()} className='py-4'>Sign Out</div>
                      </div>
                      :
                      <></>
                  }
                  {
                    toggle
                      ? <MdExpandLess size={28}
                        onClick={() => setToggle(prev => !prev)}
                      />
                      : <MdExpandMore size={28}
                        onClick={() => setToggle(prev => !prev)}
                      />

                  }
                </div>
              </>
              :
              <div className='flex items-center py-2 px-4 rounded bg-slate-700 hover:bg-slate-600 cursor-pointer transition'>
                <p onClick={() => signIn()}>Sign In</p>
              </div>
          }
        </div>
      </div>
      {/* <Navbar /> */}
    </div >
  )
}


const Navbar = () => {
  return (

    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center font-bold text-2xl">
          <span className="self-center text-black text-xl font-semibold whitespace-nowrap">Haki Builder</span>
        </Link>
        <div className="flex md:order-2">
          <div className='flex items-center py-2 px-4 rounded bg-slate-700 hover:bg-slate-600 cursor-pointer transition'>
            <p onClick={() => signIn()}>Sign In</p>
          </div>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}