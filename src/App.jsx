import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { Card } from './components/Card';
import { Sidebar } from './components/sidebar';
import { Main_posts } from './components/Main_posts';
// import './App.css'

function App() {

  return (
    <>
      <div className='main bg-green-200 flex flex-col'>
        <Navbar />
        <div className='trending mt-[70px]'>
          <h1 className='text-center text-3xl font-bold p-3 bg-'>Trending Posts</h1>
          <Slider />
        </div>
        <div className='container grid grid-cols-12'>
          <div className='col-span-4 sm:col-span-2'>
            <h1 className='text-center text-xl sm:text-3xl font-bold p-3 bg-'>Recent Posts</h1>

            <Sidebar />
          </div>

          <div className='col-span-8 border sm:col-span-10'>
            <h1 className='text-center text-2xl sm:text-3xl font-bold p-3'>All Posts</h1>
            <div className='category flex justify-center gap-3 w-[98%] mx-auto bg-blue-600 p-3'>
              <h2 className='bg-yellow-600 text-white font-semibold rounde-sm'>All</h2>
              <h2 className='bg-yellow-600 text-white font-semibold rounde-sm'>All</h2>
              <h2 className='bg-yellow-600 text-white font-semibold rounde-sm'>All</h2>
              <h2 className='bg-yellow-600 text-white font-semibold rounde-sm'>All</h2>
              <h2 className='bg-yellow-600 text-white font-semibold rounde-sm'>All</h2>
              



            </div>

            <Main_posts />

          </div>

        </div>

      </div >
    </>

  )
}

export default App
