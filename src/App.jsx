import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navbar } from './components/Navbar';
import { Home } from './components/pages/Home';
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
import { UpdatePost } from './components/pages/UpdatePost';

// import './App.css'

function App() {
  const isUpdate=null
  const token = localStorage.getItem('access_token')

  const location = useLocation();
  const [posts, setPosts] = useState([])
  const [recent, setRecent] = useState([])
  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null)
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [body, setBody] = useState('')
  const [user, setUser] = useState(localStorage.getItem('username') || '')
  const [btnText, setBtnText] = useState(isUpdate ? 'Update' : 'Post')
  
  async function getPosts() {
    try {
      let res = await axios.get('https://myapp00.pythonanywhere.com/api/posts/')
      setPosts(res.data)
    }
    catch (error) {
      console.log(error)

    }
  }

  async function getRecent() {
    try {
      let res = await axios.get('https://myapp00.pythonanywhere.com/api/posts/recent/')
      setRecent(res.data)
    }
    catch (error) {
      console.log(error)

    }
  }



  async function getCate() {
    try {
      let res = await axios.get('https://myapp00.pythonanywhere.com/api/categories/')
      setCategories(res.data)

    }
    catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    getPosts()
    getCate()
    getRecent()
    // console.log(category)

  }, [location])

  // useEffect(() => {
  //   console.log(category)

  // }, [])


  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home token={token} posts={posts} recent={recent} categories={categories} setCategories={setCategories} category={category} />}></Route>
        <Route path='about/' element={<About />}></Route>
        <Route path='contact/' element={<Contact />}></Route>
        <Route path='detail/posts/:pk/' element={<Detail body={body} token={token} user={user} />}></Route>
        <Route path='newPost/' element={<NewPost btnText={btnText} setBtnText={setBtnText} token={token} setUser={setUser} user={user} category={category} body={body} setBody={setBody} categories={categories} setCategories={setCategories}  setCategory={setCategory} title={title} image={image} setTitle={setTitle} setImage={setImage} />}></Route>
        <Route path='loginReg/' element={<LoginReg setUser={setUser} />}></Route>
        <Route path='UpdatePost/:pk' element={<UpdatePost btnText={btnText} setBtnText={setBtnText} token={token} setUser={setUser} user={user} category={category} categories={categories} setCategories={setCategories} body={body} setBody={setBody}  setCategory={setCategory} title={title} image={image} setTitle={setTitle} setImage={setImage}  />}></Route>
      </Routes>
      <Footer />
    </div>

  )
}

export default App
