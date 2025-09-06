import axios from "axios"
import { useEffect, useState } from "react"
import { Form } from "../Form"
import { useNavigate } from "react-router"
import { useLocation } from "react-router"


export function UpdatePost({ title, setTitle, body, setBody, category, setCategory, categories, image, setImage, token, btnText, setBtnText, isUpdate }) {
    const location = useLocation()
    const prevPost = location.state
    const navigate = useNavigate()
    useEffect(() => {
         setBtnText('Update')
    },[])
   


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
            formData.append('thumbnail', image)
        }

        try {
            setBtnText('Updating....')
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
        setBtnText('Update')

    }


    return (
        <>
            <div className="flex sm:pt-[4.5%] pt-[8%] min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 shadow-md">
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
                    btnText={btnText}


                />

            </div>
        </>
    )

}


