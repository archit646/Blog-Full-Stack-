import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
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
import { Detail } from './components/pages/Detail';
import { NewPost } from './components/pages/NewPost';
import { Footer } from './components/Footer';
import { LoginReg } from './components/pages/LoginReg';
// import './App.css'

function App() {
  const [posts,setPosts]=useState([])
  const [recent,setRecent]=useState([])
  const [category,setCategory]=useState([])
  async function getPosts(){
    try{
    let res=await axios('http://127.0.0.1:8000/api/posts/')
    setPosts(res.data)
    }
    catch(error){
      console.log(error)

    }
  }

  async function getRecent(){
    try{
    let res=await axios('http://127.0.0.1:8000/api/posts/recent')
    setRecent(res.data)
    }
    catch(error){
      console.log(error)

    }
  }

  

  async function getCate(){
    try{
    let res=await axios('http://127.0.0.1:8000/api/categories/')
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
    // console.log(category)
    
  },[])

   useEffect(()=>{
    // console.log(recent)
    
  },[recent])

  return (
    <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home posts={posts} recent={recent} category={category}/>}></Route>
  <Route path='about/' element={<About/>}></Route>
  <Route path='contact/' element={<Contact/>}></Route>
  <Route path='detail/posts/:pk/' element={<Detail/>}></Route>
  <Route path='newPost/' element={<NewPost categories={category}/>}></Route>
  <Route path='loginReg/' element={<LoginReg />}></Route>
</Routes>
<Footer/>
    </>

  )
}

export default App
