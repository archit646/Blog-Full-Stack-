import { useState } from "react"
import { Card } from "./Card"
export function Slider(){
    const [slide,setSlide]=useState(0)
    return(
        <>
        <div className="container border m-auto w-[80%] relative overflow-x-scroll ">
            <div style={{ transform: `translateX(${slide}%)` }} className={`slider flex transition-transform duration-500   border-4 border-red-700 gap-3`}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <button onClick={()=>setSlide(slide-100)} className="size-[50px] absolute border rounded-full top-1/2  translate-x-[-25px] text-black font-semibold bg-white/30 backdrop-blur-md">Prev</button>
            <button onClick={()=>setSlide(slide+100)} className="size-[50px] absolute border rounded-full top-[40%] translate-x-[250px] text-black font-semibold bg-white/30 backdrop-blur-md">Next</button>
        </div>
        </>
    )
}