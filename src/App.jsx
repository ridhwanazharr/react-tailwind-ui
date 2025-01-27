import { useState, useEffect  } from 'react'
import './App.css'
import ToggleDark from './elements/ToggleDark'

function App() {

  return (
    <>
      <div className="min-h-screen bg-cover bg-[url('/bigsur-light.jpg')] dark:bg-[url('/bigsur-dark.jpg')]">
      {/*Navbar*/}

        <nav className="max-w-full bg-white/15 dark:bg-zinc-950/50 backdrop-blur-md mx-auto flex max-sm:flex-col px-6 py-2 shadow-lg">
          <h1 className="font-bold text-4xl px-8 pb-2 pt-2 rounded-full transition duration-150 ease-in-out  text-black dark:text-white max-sm:text-center max-sm:mb-4"><i className="bi bi-transparency text-4xl"></i> GlassUI</h1>
          <div className="md:flex max-sm:mb-4 max-sm:mx-auto">
            <a href="#" className="text-md px-3 py-1 flex justify-center items-center text-center rounded-2xl underline decoration-1 underline-offset-6 transition duration-150 ease-in-out  text-black dark:text-white hover:bg-white/10">Home</a>
            <a href="#" className="text-md px-3 py-1 flex justify-center items-center text-center rounded-2xl transition duration-150 ease-in-out  text-black dark:text-white hover:bg-white/10">About</a>
            <a href="#" className="text-md px-3 py-1 flex justify-center items-center text-center rounded-2xl transition duration-150 ease-in-out  text-black dark:text-white hover:bg-white/10">Contacts</a>
            <ToggleDark />
          </div>
          <div className="flex justify-center items-center relative max-w-fit md:ms-auto max-sm:mx-auto">
            <input placeholder="Search..." className=" rounded-full bg-zinc-950/10 dark:bg-white/10 dark:text-white font-light text-md h-10 px-5 focus:outline-none border-black/15 dark:border-white/15 border-2 focus:border-zinc-950/50 focus:shadow-lg focus:bg-transparent  dark:focus:border-white transition-all duration-200" type="text"/>
            <i className="bi bi-search text-black/25 dark:text-white/15 absolute right-4 text-md"></i>
          </div>
        </nav>

        {/*Content*/}
        <div className="max-w-3/4 mx-auto py-12 grid grid-cols-2 gap-4">
          <h1 className="col-span-2 text-5xl text-black dark:text-white  font-bold my-6 drop-shadow-lg">GlassUI - Elevate Your Web Experience.</h1>
          <h2 className="text-3xl text-black dark:text-white  font-light my-6">A Stunning, Modern, and Responsive Web Theme</h2>

          <div className="relative flex flex-col resize min-w-[260px] overflow-auto row-span-3 max-w-3/4 p-6 m-6 rounded-xl bg-white/25 text-black dark:text-white dark:bg-stone-950/50 border-1 dark:border-white/25 border-black/25 backdrop-blur-lg drop-shadow-md">
            <a href="#" className="text-xl absolute top-2 right-3 text-black/50 dark:text-white/50 hover:text-red-600 transition-all duration-200"><i className="bi bi-x-circle"></i></a>
            <div className="flex pb-3 border-b-1 dark:border-white/25 border-black/25">
              <img src="/person.jpg" alt="Profile" className="row-span-2 w-15 h-15 rounded-full border-1 dark:border-white/25 border-black/25" />
              <div className="flex-col">
                <h2 className="text-2xl my-auto ps-6">John Doe</h2>
                <h2 className="text-md my-auto ps-6 text-black/75 dark:text-white/75">@realjohndoe</h2>
              </div>
            </div>
            <div className="flex-grow py-3">
              Hi. im new on this platform, nice to meet you guys!
            </div>
            <div className="flex">
              <a href="#" className="text-md text-black dark:text-white rounded-xl bg-teal-300/50 dark:bg-teal-700/50 border-1 border-zinc-950/50 dark:border-white/50  drop-shadow-md py-1 px-4 me-2"><i className="bi bi-hand-thumbs-up"></i> Like</a>
              <a href="#" className="text-md text-black dark:text-white rounded-xl bg-amber-300/50 dark:bg-orange-600/50 border-1 border-zinc-950/50 dark:border-white/50  drop-shadow-md py-1 px-4 me-2"><i className="bi bi-send"></i> Share</a>
            </div>
          </div>

          <p className="text-lg text-black dark:text-white font-light mb-5">brings elegance and functionality together with a sleek, glassmorphic design, smooth transitions, and fully responsive layouts. Whether you're building a portfolio, a business website, or a personal blog, our theme ensures a visually stunning and seamless experience.</p>
          <a href="#" className="font-bold text-2xl mx-auto text-black dark:text-white rounded-full bg-teal-400/50 dark:bg-teal-950/50 border-1 border-zinc-950/50 dark:border-white/50  backdrop-blur-md drop-shadow-md py-2 px-8">Get started</a>
        </div>

      </div>
    </>
  )
}

export default App
