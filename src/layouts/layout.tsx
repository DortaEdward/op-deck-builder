/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen min-w-full bg-slate-900 text-white flex flex-col gap-2">
      <Header />
      <main className="w-full h-full flex flex-col items-center justify-center">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}