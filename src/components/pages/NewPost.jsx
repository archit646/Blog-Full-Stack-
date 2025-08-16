import axios from "axios"
import { useEffect, useState } from "react"

export function NewPost({ categories }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', title)
        formData.append('content', body)
        formData.append('category', category)
        if (image) {
            formData.append('thumbnail', image)
        }
        try {
            const res = await axios.post('http://192.168.175.150:8000/api/posts/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            console.log('success:', res.data)
        }
        catch (error) {
            console.log('Error:', error)
        }



    }
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-200 shadow-md shadow-black">
                <div className="border bg-amber-500 rounded-md text-white w-[400px] h-auto p-3 m-auto my-auto flex flex-col gap-3 shadow-xl shadow-black">
                    <h1 className="text-center font-bold w-[80%] mx-auto bg-blue-800 p-2 text-white rounded-2xl">Create New Post</h1>
                    <form onSubmit={handleSubmit} className="border flex flex-col items-center h-auto w-full gap-4 bg-blue-800 p-4 rounded-2xl">
                        <div className="w-full">
                            <span className="font-semibold">Title</span>
                            <input className="w-full border p-1 bg-gray-500" type='text' placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                        </div>
                        <div className="border w-full">
                            <select className="w-full p-1 bg-gray-700 text-white" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option disabled className="" value="">Category</option>
                                {categories.map((item, index) => {
                                    return <option key={index} value={item.name}>{item.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="w-full" >
                            <span className="font-semibold">Body</span>
                            <textarea className="w-full border p-1 bg-gray-500" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="font-semibold">Thumbnail</span>
                            <input className="bg-gray-500 p-1 px-2 text-white font-semibold cursor-pointer" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}></input>
                        </div>
                        <button type="submit" className="w-[30%] border rounded-sm font-semibold bg-red-700 text-white cursor-pointer">Post</button>

                    </form>
                </div>
            </div>
        </>
    )
}