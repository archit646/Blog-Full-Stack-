// import { useEffect, useState } from 'react';
import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




export function Form({ title, body, category, categories, handlePostSubmit, handleUpdateSubmit, setTitle, setBody, image, setImage, setCategory, isUpdate, imageName }) {
    // console.log(image.name)
    
    // console.log(categories)

    // const [text,setText]=useState('')
    const quillRef = useRef(null);
    const [fileName, setFileName] = useState(imageName)

    const handleFileChange = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name)
            setImage(e.target.files[0]);
        }
        else {
            setFileName('No File Chosen')
        }
    }
    // console.log(body)
    return (
        <div className="border bg-amber-500 rounded-md text-white w-[80%] h-auto p-3  flex flex-col gap-3 shadow-xl shadow-black">
            <h1 className="text-center font-bold w-[80%] mx-auto bg-blue-800 p-2 text-white rounded-2xl">{isUpdate ? 'Update Post' : 'Create New Post'}</h1>
            <form onSubmit={isUpdate ? handleUpdateSubmit : handlePostSubmit} className="border flex flex-col items-center h-auto w-full gap-4 bg-blue-800 p-4 rounded-2xl">
                <div className="w-full">
                    <span className="font-semibold">Title</span>
                    <input className="w-full border p-1 bg-gray-500" type='text' placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="border w-full">
                    <select className="w-full p-1 bg-gray-700 text-white" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option disabled className="" value="">Category</option>
                        {categories?.map((item, index) => {
                            return <option key={index} value={item.name}>{item.name}</option>
                        })}
                    </select>
                </div>
                <div className="w-full overflow-auto" >
                    <span className="font-semibold">Body</span>
                    {/* <textarea className="w-full border p-1 bg-gray-500" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea> */}
                    <ReactQuill ref={quillRef} placeholder='Write Amazing Somthing...' className='bg-white text-black h-[300px] overflow-hidden' theme="snow" value={body || ''} onChange={setBody} />
                </div>
                <div className="flex flex-col w-full ">
                    <span className="font-semibold">Thumbnail</span>
                    <div className='flex justify-between items-center gap-1'>
                        <input className={`bg-gray-500 p-1 px-2 w-full  text-white font-semibold cursor-pointer`} type="file" accept="image/*" onChange={handleFileChange}></input>
                        <label className={`${ fileName?'block':'hidden'} border text-sm  overflow-hidden h-[30px] p-1 line-clamp-1`}>{fileName}</label>
                    </div>
                </div>
                <button type="submit" className="w-[30%] border rounded-sm font-semibold bg-red-700 hover:bg-red-900 text-white cursor-pointer">{isUpdate ? 'Update' : 'Post'}</button>

            </form>
        </div>
    )
}