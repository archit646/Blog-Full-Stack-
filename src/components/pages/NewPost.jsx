import axios from "axios"
import { useEffect, useState } from "react"
import { Form } from "../form"
import { useNavigate } from "react-router"


export function NewPost({title,setTitle,body,setBody,category,categories,setCategory,image,setImage,token}) {
    const navigate = useNavigate()
    useEffect(() => {
        setTitle('')
        setBody('')
        setCategory('')
        setImage(null)
    },[])

    const handlePostSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', title)
        formData.append('content', body)
        formData.append('category', category)
        if (image) {
            formData.append('thumbnail', image)
        }
        try {
            
            const res = await axios.post('http://127.0.0.1:8000/api/posts/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            })
           
            console.log('success:', res.data)
            navigate('/')

        }
        catch (error) {
            console.log('Error:', error)
        }



    }
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-200 shadow-md shadow-black">
                <Form setTitle={setTitle}
                    setBody={setBody}
                    setImage={setImage}
                    setCategory={setCategory}
                    title={title}
                    body={body}
                    image={image}
                    category={category}
                    categories={categories}
                    handlePostSubmit={handlePostSubmit}
                    isUpdate={false}
                />
            </div>
        </>
    )
}