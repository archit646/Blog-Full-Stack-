import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
export function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <>
        <div className="navbar fixed w-full z-50 border flex items-center justify-between sm:justify-around p-4 bg-amber-400 top-0">
            <div className="logo">
                <h1 className="text-2xl">My Logo</h1>
            </div>
            <div className="links hidden sm:block">
                <ul className="flex gap-3">
                    
                    <NavLink to='/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm">Home</NavLink>
                    <NavLink to='about/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm">About</NavLink>
                    <NavLink to='contact/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm">Contact</NavLink>
                    
                </ul>

            </div>
            <div className="auth-btn flex gap-3">
                <button className="bg-pink-700 text-white font-semibold px-2 py-1 rounded-sm">Login</button>
                <button className="bg-pink-700 text-white font-semibold px-2 py-1 rounded-sm">SignUp</button>

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