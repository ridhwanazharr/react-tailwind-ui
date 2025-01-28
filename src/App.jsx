import { useState, useEffect  } from 'react'
import './App.css'
import ToggleDark from './elements/ToggleDark'
import CodeBlock from "./components/CodeBlock";
import CardDemo from "./components/CardDemo";

function App() {

  return (
    <>
      <div className="min-h-screen bg-cover bg-[url('/bigsur-light.jpg')] dark:bg-[url('/bigsur-dark.jpg')]">
      {/*Navbar*/}

        <nav className="max-w-full bg-white/15 dark:bg-zinc-950/50 backdrop-blur-md mx-auto flex max-sm:flex-col px-6 py-2 shadow-lg">
          <h1 className="font-bold text-4xl px-8 pb-2 pt-2 rounded-full transition duration-150 ease-in-out  bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text animate-gradient-move text-transparent max-sm:text-center max-sm:mb-4"><i className="bi bi-transparency text-4xl"></i> GlassUI</h1>
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

        <div className="max-w-3/4 mx-auto my-12">
          <h1 className="col-span-2 text-5xl text-black dark:text-white  font-bold my-6 drop-shadow-lg">GlassUI - Elevate Your Web Experience.</h1>
        </div>
        <div className="max-w-3/4 grid grid-cols-2 gap-4 mx-auto">
          <div>
            <h2 className="text-3xl text-black dark:text-white  font-bold my-6">A Stunning, Modern, and Responsive Web Theme</h2>
            <p className="text-lg text-black dark:text-white font-medium mb-5">brings elegance and functionality together with a sleek, glassmorphic design, smooth transitions, and fully responsive layouts. Whether you're building a portfolio, a business website, or a personal blog, our theme ensures a visually stunning and seamless experience.</p>
            <div className="flex">
              <a href="" className="btn-primary">Get Started</a>
            </div>
          </div>
          <div className="h-96 w-full">
            <CardDemo />
          </div>
        </div>
        <div className="max-w-3/4 mx-auto py-12 grid grid-cols-2 gap-4">
          
          
          
        </div>

      </div>
    </>
  )
}

export default App
