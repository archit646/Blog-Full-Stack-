import axios from "axios"
import { Navigate, useParams } from "react-router-dom";
import { Sidebar } from "../sidebar"
import { useEffect, useState } from "react"
import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
export function Detail({body}) {
    const navigate=useNavigate()
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
    async function deletePost() {
        const res = await axios.delete(`http://127.0.0.1:8000/api/posts/${pk}/`)
        navigate('/')
        console.log('success')
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
            <div className="main border grid grid-cols-12 min-h-screen gap-3 overflow-auto">
                <div className="container border sm:col-span-10 pt-[70px] flex flex-col p-3 bg-red-300 gap-4 h-full">
                    <div className="bg-gray-600 p-3 flex flex-col items-center rounded-md gap-3">
                        <h1 className="font-bold text-3xl line-clamp-1 break-words text-white p-1">{singlePost.title}</h1>
                        <div className="flex justify-between gap-3 text-white">
                            <span className="py-1 px-2 bg-gray-800 flex items-center gap-1"><IoPerson/>Author-<span>{singlePost.author?.username}</span></span>
                            <span className="py-1 px-2 bg-gray-800 flex items-center gap-1"><SlCalender/>Created-<span>{singlePost.created_at}</span></span>
                        </div> 
                        <div className="btn-container text-white flex gap-2">
                            <button className=" px-2 flex justify-center items-center py-1 bg-green-500 font-semibold rounded-sm cursor-pointer">Update</button>
                            <button onClick={deletePost} className=" px-2 flex justify-center items-center py-1 bg-red-500 font-semibold rounded-sm cursor-pointer">Delete</button>

                        </div>
                    </div>
                    
                    <img className="w-[80%] h-[30%] object-cover mx-auto" src={singlePost.thumbnail}></img>
                    <div className="max-w-full">
                        <div className="ql-editor" dangerouslySetInnerHTML={{ __html: body }} />
                    </div>
                </div>
                <div className="col-span-4 sm:col-span-2 border bg-red-300 p-2 pt-[65px] h-full">
                    <h1 className='text-center text-xl sm:text-2xl font-bold p-3'>Releated Posts</h1>
                    <Sidebar posts={releated} />

                </div>

            </div>
        </>
    )
}