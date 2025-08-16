import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
export function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <>
        <div className="navbar fixed w-full z-50 border flex items-center justify-between sm:justify-around  bg-amber-400 top-0">
            
                <img className="logo w-[4.5%] h-[6%] scale-[130%]  object-contain" src="https://cdn-icons-png.flaticon.com/512/10026/10026257.png" alt="logo" />
            
            <div className="links hidden sm:block">
                <ul className="flex gap-3">
                    
                    <NavLink to='/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm">Home</NavLink>
                    <NavLink to='about/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm">About</NavLink>
                    <NavLink to='contact/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm">Contact</NavLink>
                    
                </ul>

            </div>
            <div className="auth-btn flex gap-3">
                <NavLink to='newPost/' className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm flex items-center"><IoMdAdd className="font-bold text-2xl"/>New Post</NavLink>
                <NavLink to='loginReg/' className="bg-pink-700 text-white font-semibold px-2 py-1 rounded-sm">Login/Register</NavLink>
                

            </div>
            <div className="toggle-container sm:hidden">
                <button onClick={() => setMenu(!menu)} >{menu?<RxCross2 className="text-3xl font-semibold text-white"/>:<FaBars className="text-white font-semibold text-2xl" />}</button>
            </div>
        </div>

        {/* mobile menu  */}
        <div className={`menu ${menu?'block':'hidden'} mt-[70px]`}>
            <ul className="bg-amber-700 text-white font-semibold p-1 ">
            <NavLink to='/' className="border p-2">Home</NavLink>
            <NavLink to='about/' className="border p-2">About</NavLink>
            <NavLink to='contact/' className="border p-2">Contact</NavLink>
            </ul>
        </div>
        </>
        
    )
}