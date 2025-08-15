import axios from "axios"
import { useParams } from "react-router-dom";
import { Sidebar } from "../sidebar"
import { useEffect, useState } from "react"
export function Detail() {
    const  {pk}  = useParams()
    const [releated, setReleated] = useState([])
    const [singlePost, setSinglePost] = useState({})
    async function getreleated() {
        const res = await axios(`http://127.0.0.1:8000/api/posts/${pk}/releated/`)
        setReleated(res.data)
    }
    async function getsingle() {
        const res = await axios.get(`http://127.0.0.1:8000/api/posts/${pk}/`)
        setSinglePost(res.data)
    }
    useEffect(() => {
        getreleated()
        getsingle()
    }, [])
    useEffect(()=>{
console.log(singlePost)
    },[singlePost])
    return (
        <>
            <div className="main border grid grid-cols-12 h-screen gap-3 overflow-auto">
                <div className="container border sm:col-span-10 py-[70px] flex flex-col p-3 bg-red-300 gap-4 h-full">
                    <h1 className="font-bold text-3xl line-clamp-1 break-words">{singlePost.title}</h1>
                    <img className="w-[80%] h-[30%] object-cover mx-auto" src={singlePost.thumbnail}></img>
                    <p>{singlePost.content}</p>
                </div>
                <div className="col-span-4 sm:col-span-2 border bg-red-300 p-2 py-[65px] h-full">
                    <h1 className='text-center text-xl sm:text-2xl font-bold p-3'>Releated Posts</h1>
                    <Sidebar posts={releated} />

                </div>

            </div>
        </>
    )
}