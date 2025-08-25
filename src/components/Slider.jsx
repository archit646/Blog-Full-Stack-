import { useEffect, useState } from "react"
import { Card } from "./Card"
import axios from "axios"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export function Slider({ posts,token}) {
    

    const [trending, setTrending] = useState([])
    let box = document.querySelector('.post-container')
    const prevbtn = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width
        console.log(width)
    }
    const nextbtn = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width
        console.log(width)
    }
    const get_trending = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/posts/trending/' || 'https://myapp00.pythonanywhere.com/api/posts/trending/')
            setTrending(res.data)
        } catch (error) {
            console.log('Error', error)
        }
    }
    useEffect(() => {
        get_trending()

    }, [])
    return (
        <>
            <div className="relative overflow-hidden px-6 py-3">
                <div className={'post-container overflow-hidden scroll-smooth flex gap-4 py-3'}>
                    {trending?.map((item) =>
                        <Card key={item.id} item={item} />
                    )}


                </div>
                <button onClick={prevbtn} className="size-[50px] absolute border rounded-full top-[43%] left-[0.1%]  text-black font-semibold bg-white/30 backdrop-blur-md flex items-center justify-center"><FaAngleLeft  className="text-2xl font-bold"/></button>
                <button onClick={nextbtn} className="size-[50px] absolute border rounded-full top-[43%] right-[0.6%] text-black font-semibold bg-white/30 backdrop-blur-md flex items-center justify-center"><FaAngleRight className="text-2xl font-bold"/></button>
            </div>
        </>
    )
}