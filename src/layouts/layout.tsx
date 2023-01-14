/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Layout({ children }: any) {

  const [theme, setTheme] = useState<boolean>(false);
  useEffect(() => {
    const userTheme = window.localStorage.getItem('theme');
    const sysTheme = window.matchMedia('prefers-color-scheme: dark').matches;
    // const isTheme = window.localStorage.getItem('theme');
    if(userTheme === 'dark' || (!userTheme && sysTheme)){
      setTheme(true)
    } else {
      setTheme(false)
    }
  },[]);

  const toggleTheme = () => {
    setTheme(prev => !prev);
    const userTheme = window.localStorage.getItem('theme');

    if (userTheme === 'dark'){
      window.localStorage.setItem('theme','light')
    } else {
      window.localStorage.setItem('theme','dark')
    }
  }
  return (
    <div className={theme ? 'dark' : ''}>
      <div className="min-h-screen min-w-screen dark:bg-slate-900 bg-slate-200 text-white flex flex-col gap-2 relative">
        <Header />
        <main className="w-full h-full flex flex-col items-center justify-center">
          {children}
        </main>
        {/* <Footer /> */}
        <div className="flex items-center justify-center absolute bottom-8 right-8 text-white rounded-full dark:bg-slate-50 dark:text-black bg-black w-10 h-10 text-center cursor-pointer">
          {
            theme
              ? <MdLightMode size={20} onClick={() => toggleTheme()} />
              : <MdDarkMode size={20}  onClick={() => toggleTheme()} />
          }
        </div>
      </div>
    </div>
  )
}