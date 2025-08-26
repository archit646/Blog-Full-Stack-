import { useState } from "react";
import { NavLink, useNavigate } from 'react-router'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { useEffect } from "react";
export function Navbar({ user, setUser }) {


    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('username')
        setUser('')
        // localStorage.removeItem('username')
        navigate('/loginReg')

    }
    const handle = () => {
        if (user) {
            navigate('/newPost')
        }
        else {
            alert('Please Login First')
            navigate('/loginReg')
        }
    }

    return (
        <div className="relative w-screen">
            <div className="navbar fixed w-screen flex items-center justify-around sm:justify-around bg-amber-400 top-0 z-50">

                <img className="logo max-w-[60px] max-h-[60px] sm:max-w-[90px] sm:max-h-[90px] scale-[230%] sm:scale-[230%]" src="/mylogo.png" alt="logo" />

                <div className="links hidden sm:block">
                    <div className="flex gap-3">

                        <div><NavLink to='/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm hover:bg-blue-900">Home</NavLink></div>
                        <div><NavLink to='/about' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm hover:bg-blue-900">About</NavLink></div>
                        <div><NavLink to='/contact' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm hover:bg-blue-900">Contact</NavLink></div>

                    </div>

                </div>
                <button onClick={handle} className="bg-green-600 hover:bg-green-800 text-white font-semibold sm:hidden text-sm px-3 py-1 flex items-center justify-center  rounded-sm  cursor-pointer"><IoMdAdd className="font-bold text-2xl" />New Post</button>

                <div className="auth-btn sm:flex gap-5 hidden">
                    <button onClick={handle} className="bg-green-600 hover:bg-green-800 text-white font-semibold p-1  text-sm sm:px-3 sm:py-1  rounded-sm flex items-center justify-center cursor-pointer"><IoMdAdd className="font-bold text-2xl" />New Post</button>

                    {user
                        ? <div className="flex items-center justify-center gap-[2px]">
                            <h1 className="border flex  items-center justify-center font-bold text-xl p-1 rounded-sm bg-violet-700 text-white">{user}</h1>
                            <button className="bg-pink-700 hover:bg-pink-900 text-white font-semibold px-2 py-1 rounded-sm cursor-pointer" onClick={handleLogout}>Logout</button>
                        </div>
                        : <NavLink to='/loginReg' className="bg-pink-700 hover:bg-pink-900 text-white font-semibold px-2 py-1 rounded-sm cursor-pointer">Login/Register</NavLink>
                    }


                </div>
                <div className="toggle-container block sm:hidden">
                    <button className="" onClick={() => setMenu(!menu)} >{menu ? <RxCross2 className="text-3xl font-semibold text-white" /> : <FaBars className="text-white font-semibold text-2xl" />}</button>
                </div>
            </div>
            {/* mobile menu  */}
            <div className={`menu ${menu ? 'block' : 'hidden'} mt-[41px] sm:hidden transition-all duration-300 ease-in-out absolute w-full z-40`}>
                <div className="bg-amber-700 text-white font-semibold p-1 flex flex-col items-center">
                    <NavLink to="/" className="w-full border"><div onClick={()=>setMenu(false)} className=" p-[10px]">Home</div></NavLink>
                    <NavLink to='/about' className="w-full border"><div onClick={()=>setMenu(false)} className=" p-[10px]">About</div></NavLink>
                    <NavLink to='/contact' className="w-full border"><div onClick={()=>setMenu(false)} className=" p-[10px]">Contact</div></NavLink>
                </div>
            </div>
</div>
            
        

    )
}