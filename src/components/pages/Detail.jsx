import axios from "axios"
import { useParams } from "react-router-dom";
import { Sidebar } from "../sidebar"
import { useEffect, useState } from "react"
import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
export function Detail() {
    const { pk } = useParams()
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
    useEffect(() => {
        console.log(singlePost)
    }, [singlePost])
    return (
        <>
            <div className="main border grid grid-cols-12 h-screen gap-3 overflow-auto">
                <div className="container border sm:col-span-10 pt-[70px] flex flex-col p-3 bg-red-300 gap-4 h-full">
                    <div className="bg-gray-600 p-3 flex flex-col items-center rounded-md gap-3">
                        <h1 className="font-bold text-3xl line-clamp-1 break-words text-white p-1">{singlePost.title}</h1>
                        <div className="flex justify-between gap-3 text-white">
                            <span className="py-1 px-2 bg-gray-800 flex items-center gap-1"><IoPerson/>Author-<span>{singlePost.author?.username}</span></span>
                            <span className="py-1 px-2 bg-gray-800 flex items-center gap-1"><SlCalender/>Created-<span>{singlePost.created_at}</span></span>
                        </div> 
                        <div className="btn-container text-white flex gap-2">
                            <button className=" px-2 py-1 bg-green-500 font-semibold rounded-sm">Update</button>
                            <button className=" px-2 py-1 bg-red-500 font-semibold rounded-sm">Delete</button>

                        </div>
                    </div>
                    
                    <img className="w-[80%] h-[30%] object-cover mx-auto" src={singlePost.thumbnail}></img>
                    <p>{singlePost.content}</p>
                </div>
                <div className="col-span-4 sm:col-span-2 border bg-red-300 p-2 pt-[65px] h-full">
                    <h1 className='text-center text-xl sm:text-2xl font-bold p-3'>Releated Posts</h1>
                    <Sidebar posts={releated} />

                </div>

            </div>
        </>
    )
}