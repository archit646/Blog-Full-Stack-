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
import { replace, Route, Routes, useNavigate } from 'react-router';
import { Detail } from './components/pages/Detail';
import { NewPost } from './components/pages/NewPost';
import { Footer } from './components/Footer';
import { LoginReg } from './components/pages/LoginReg';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router';

// import './App.css'

function App() {
  const token=localStorage.getItem('access_token')

  const location=useLocation();
  const [posts,setPosts]=useState([])
  const [recent,setRecent]=useState([])
  const [category,setCategory]=useState([])
  const [user,setUser]=useState(localStorage.getItem('username') || '')
  
  async function getPosts(){
    try{
      let res = await axios.get('http://127.0.0.1:8000/api/posts/')
    setPosts(res.data)
    }
    catch(error){
      console.log(error)

    }
  }

  async function getRecent(){
    try{
    let res=await axios.get('http://127.0.0.1:8000/api/posts/recent')
    setRecent(res.data)
    }
    catch(error){
      console.log(error)

    }
  }

  

  async function getCate(){
    try{
    let res=await axios.get('http://127.0.0.1:8000/api/categories/')
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
    
  },[location])

   useEffect(()=>{
    console.log(category)
    
  },[])


  return (
    <>
<Navbar user={user} setUser={setUser}/>
<Routes>
  <Route path='/' element={<Home token={token} posts={posts} recent={recent} category={category} />}></Route>
  <Route path='about/' element={<About/>}></Route>
  <Route path='contact/' element={<Contact/>}></Route>
  <Route path='detail/posts/:pk/' element={<Detail/>}></Route>
  <Route path='newPost/' element={<NewPost token={token} setUser={setUser} user={user} categories={category}/>}></Route>
  <Route path='loginReg/' element={<LoginReg setUser={setUser}/>}></Route>
</Routes>
<Footer/>
    </>

  )
}

export default App
