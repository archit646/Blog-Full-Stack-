import axios from "axios"
import { useEffect, useState } from "react"
import { Form } from "../Form"
import { useNavigate } from "react-router"


export function NewPost({ title, setTitle, body, setBody, category, categories, setCategory, image, setImage, token, btnText, setBtnText, isUpdate }) {
    const navigate = useNavigate()
    useEffect(() => {
         setBtnText('Post')
    },[])
    useEffect(() => {
        setTitle('')
        setBody('')
        setCategory('')
        setImage(null)
    }, [])

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
            setBtnText('Posting....')
            const res = await axios.post('https://myapp002.pythonanywhere.com/api/posts/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }

            })


            console.log('success:', res.data)
            navigate('/')

        }
        catch (error) {
            console.log(error)
            alert('Your Token has Expired Please Login Again')
            navigate('/LoginReg')
            // console.log('Error:', error)
        }

        setBtnText('Post')

    }
    return (
        <>
            <div className="flex sm:pt-[4.5%] pt-[8%] min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 shadow-md">
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
                    btnText={btnText}

                />
            </div>
        </>
    )
}