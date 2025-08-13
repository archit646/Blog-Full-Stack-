import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar';
import {Home} from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Slider } from './components/Slider';
import { Card } from './components/Card';
import { Sidebar } from './components/sidebar';
import { Main_posts } from './components/Main_posts';
import axios from 'axios';
import { Route, Routes } from 'react-router';
// import './App.css'

function App() {
  const [posts,setPosts]=useState([])
  const [recent,setRecent]=useState([])
  const [category,setCategory]=useState([])
  async function getPosts(){
    try{
    let res=await axios('http://192.168.51.150:8000/api/posts/')
    setPosts(res.data)
    }
    catch(error){
      console.log(error)

    }
  }

  async function getRecent(){
    try{
    let res=await axios('http://192.168.51.150:8000/api/posts/recent')
    setRecent(res.data)
    }
    catch(error){
      console.log(error)

    }
  }

  

  async function getCate(){
    try{
    let res=await axios('http://192.168.51.150:8000/api/categories/')
    setCategory(res.data)
    }
    catch(error){
      console.log(error)

    }
  }
  useEffect(()=>{
    getPosts()
    getCate()
    getRecent()
    
  },[])

   useEffect(()=>{
    console.log(recent)
    
  },[recent])

  return (
    <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home posts={posts} recent={recent} category={category}/>}></Route>
  <Route path='about/' element={<About/>}></Route>
  <Route path='contact/' element={<Contact/>}></Route>
</Routes>
    </>

  )
}

export default App
