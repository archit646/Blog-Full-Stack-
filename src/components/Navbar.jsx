import { useState } from "react";
import { NavLink, Routes, Route } from 'react-router'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
export function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <>
        <div className="navbar fixed w-full z-50 border flex items-center justify-between sm:justify-around p-4 bg-amber-400">
            <div className="logo">
                <h1 className="text-2xl">My Logo</h1>
            </div>
            <div className="links hidden sm:block">
                <ul className="flex gap-3">
                    <li className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm">Home</li>
                    <li className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm">About</li>
                    <li className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm">Contact</li>
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
            <li className="border p-2">Home</li>
            <li className="border p-2">About</li>
            <li className="border p-2">Contact</li>
            </ul>
        </div>
        </>
        
    )
}