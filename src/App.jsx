import { useState, useEffect  } from 'react'
import './App.css'

function App() {

  if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.documentElement.classList.toggle("dark");
  }

  const setTheme = () => {
      document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="h-screen bg-cover bg-linear-45 from-fuchsia-300 via-orange-200 to-sky-100   dark:from-rose-900 dark:via-fuchsia-900 dark:to-violet-950 z-[-3]">
      <div className="absolute w-96 h-96 bg-orange-700 rounded-full z-[-1]"></div>
      {/*Navbar*/}

      <nav className="max-w-full bg-stone-300/40 dark:bg-zinc-950/50 backdrop-blur-md mx-auto flex max-sm:flex-col px-6 py-2 shadow-lg">
        <h1 className="text-4xl px-8 pb-2 pt-2 rounded-full transition duration-150 ease-in-out  text-zinc-900 dark:text-white max-sm:text-center max-sm:mb-4"><i class="bi bi-transparency text-4xl"></i> GlassUI</h1>
        <div className="md:flex max-sm:mb-4 max-sm:mx-auto">
          <a href="#" className="text-md px-3 py-1 flex justify-center items-center text-center rounded-2xl underline decoration-1 underline-offset-6 transition duration-150 ease-in-out  text-zinc-900 dark:text-white hover:bg-white/10">Home</a>
          <a href="#" className="text-md px-3 py-1 flex justify-center items-center text-center rounded-2xl transition duration-150 ease-in-out  text-zinc-900 dark:text-white hover:bg-white/10">About</a>
          <a href="#" className="text-md px-3 py-1 flex justify-center items-center text-center rounded-2xl transition duration-150 ease-in-out  text-zinc-900 dark:text-white hover:bg-white/10">Contacts</a>
        </div>
        <div className="flex justify-center items-center relative max-w-fit md:ms-auto max-sm:mx-auto">
          <input placeholder="Search..." className=" rounded-full bg-zinc-950/10 dark:bg-white/10 dark:text-white font-light text-md h-10 px-5 focus:outline-none border-black/15 dark:border-white/15 border-2 focus:border-zinc-950/50 focus:shadow-lg  dark:focus:border-white transition-all duration-200" type="text"/>
          <i className="bi bi-search text-zinc-950/25 dark:text-white/15 absolute right-4 text-md"></i>
        </div>
      </nav>
      <a onClick={setTheme}>theme</a>

      {/*Content*/}

      <div className="m-10 p-10">
        <h1 className="text-5xl text-zinc-950 dark:text-white  font-bold my-6 drop-shadow-lg">GlassUI - Elevate Your Web Experience.</h1>
        <h2 className="text-3xl text-zinc-950 dark:text-white  font-light my-6">A Stunning, Modern, and Responsive Web Theme</h2>

        <div className="my-6 max-w-1/2">
          <p className="text-lg text-zinc-950 dark:text-white  font-light mb-5">brings elegance and functionality together with a sleek, glassmorphic design, smooth transitions, and fully responsive layouts. Whether you're building a portfolio, a business website, or a personal blog, our theme ensures a visually stunning and seamless experience.</p>
          <a href="#" className="text-2xl text-zinc-950 dark:text-white">Try it -</a>
        </div>
        

      </div>

      </div>
    </>
  )
}

export default App
