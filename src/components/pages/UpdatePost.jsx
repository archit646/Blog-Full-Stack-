import axios from "axios"
import { useEffect, useState } from "react"
import { Form } from "../Form"
import { useNavigate } from "react-router"
import { useLocation } from "react-router"


export function UpdatePost({ title, setTitle, body, setBody, category, setCategory, categories, image, setImage, token }) {
    const location = useLocation()
    const prevPost = location.state
    const navigate = useNavigate()


    useEffect(() => {
        setTitle(prevPost.title)
        setBody(prevPost.content)
        setCategory(prevPost.category)
        // setImage(null)
    }, [prevPost])

    const handleUpdateSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        // formData.append('id', prevPost.id)
        formData.append('title', title)
        formData.append('category', category)
        formData.append('content', body)
        if (image instanceof File) {
            formData.append('thumbnail',image)
        }

        try {
            const res = await axios.put(`https://myapp00.pythonanywhere.com/api/posts/${prevPost.id}/`, formData, {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }

            })
            navigate('/')
            console.log('success')
        } catch (error) {
            alert('Sorry You Cannot Update This Post')
            
        }


    }


    return (
        <>
            <div className="flex items-center justify-center sm:py-[5%] py-[15%] bg-gradient-to-br from-blue-100 to-blue-200 shadow-md shadow-black">
                <Form
                    setTitle={setTitle}
                    setBody={setBody}
                    setImage={setImage}
                    setCategory={setCategory}
                    categories={categories}
                    title={title}
                    body={body}
                    category={category}
                    imageName={prevPost?.thumbnail.split('/').pop()}
                    handleUpdateSubmit={handleUpdateSubmit}
                    prevPost={prevPost}
                    isUpdate={true}


                />

            </div>
        </>
    )

}


