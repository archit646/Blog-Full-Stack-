import axios from "axios"
import { Navigate, useParams } from "react-router-dom";
import { Sidebar } from "../sidebar"
import { useEffect, useState } from "react"
import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Detail({ token }) {
    const navigate = useNavigate()
    const { pk } = useParams()
    const [releated, setReleated] = useState([])
    const [singlePost, setSinglePost] = useState({})
    const [comment, setComment] = useState('')
    async function getreleated() {
        const res = await axios.get(`https://myapp00.pythonanywhere.com/api/posts/${pk}/releated/`)
        setReleated(res.data)
    }
    async function getsingle() {
        const res = await axios.get(`https://myapp00.pythonanywhere.com/api/posts/${pk}/`)
        setSinglePost(res.data)
    }
    async function deletePost() {
        try {
            const res = await axios.delete(`https://myapp00.pythonanywhere.com/api/posts/${pk}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            navigate('/')
            console.log('success')
        } catch (error) {
            alert('Please Login First')
            navigate('/loginReg')
        }
       
    }
    async function commentPost(e) {
        e.preventDefault()
        try {
            const res = await axios.post('https://myapp00.pythonanywhere.com/api/comments/', {
                content: comment,
                post: singlePost.id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            getsingle()
            setComment('')
        } catch (error) {
            alert('Please Login First')
            navigate('/loginReg')
        }

    }

    useEffect(() => {
        getreleated()
        getsingle()
    }, [])

    return (
        <>
            <div className="main border grid grid-cols-12 min-h-screen gap-3 overflow-auto">
                <div className="container border sm:col-span-10 pt-[70px] flex flex-col p-3 bg-red-300 gap-4 h-full">
                    <div className="bg-gray-600 p-3 flex flex-col items-center rounded-md gap-3">
                        <h1 className="font-bold text-3xl line-clamp-1 break-words text-white p-1">{singlePost.title}</h1>
                        <div className="flex justify-between gap-3 text-white">
                            <span className="py-1 px-2 bg-gray-800 flex items-center gap-1"><IoPerson />Author-<span>{singlePost.author?.username}</span></span>
                            <span className="py-1 px-2 bg-gray-800 flex items-center gap-1"><SlCalender />Created-<span>{singlePost.created_at}</span></span>
                        </div>
                        <div className="btn-container text-white flex gap-2">
                            <NavLink to={`/updatePost/${singlePost.id}`} state={singlePost} className=" px-2 flex justify-center items-center py-1 bg-green-500 font-semibold rounded-sm cursor-pointer">Update</NavLink>
                            <button onClick={deletePost} className=" px-2 flex justify-center items-center py-1 bg-red-500 font-semibold rounded-sm cursor-pointer">Delete</button>

                        </div>
                    </div>

                    <img className="w-[80%] h-[30%] object-cover mx-auto" src={singlePost.thumbnail}></img>
                    <div className="max-w-full" dangerouslySetInnerHTML={{ __html: singlePost.content }}>

                    </div>
                    <div className="comment-main w-full flex flex-col gap-4 p-2 mt-auto bg-blue-600 mx-auto text-white">
                        <h1 className="mx-auto text-2xl font-bold">Comment Section</h1>
                        <form onSubmit={commentPost} className="flex gap-4">
                            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write Something..." className="w-[85%] border py-1 px-2 bg-white text-black"></input>
                            <button type="submit" className="w-[15%] border font-semibold bg-green-700">Post</button>
                        </form>
                        {singlePost.comments?.map((comment) => {
                            return (<div key={comment.id} className="flex gap-4">
                                <div className="comment-section break-words whitespace-normal w-[85%] border p-2 text-justify font-semibold bg-amber-600 ">
                                    <h1>{comment.content}</h1>
                                </div>
                                <div className="user-section border w-[15%] p-2 flex items-center justify-center font-semibold bg-red-600">
                                    <h1>{comment.user.username}</h1>

                                </div>
                            </div>
                            )
                        })}
                    </div >
                </div>
                <div className="col-span-4 sm:col-span-2 border bg-red-300 p-2 pt-[65px] h-full">
                    <h1 className='text-center text-xl sm:text-2xl font-bold p-3'>Releated Posts</h1>
                    <Sidebar posts={releated} />

                </div>

            </div>
        </>
    )
}