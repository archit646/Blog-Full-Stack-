import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
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
        navigate('loginReg/')

    }
    const handle = () => {
        if (user) {
            navigate('newPost/')
        }
        else {
            alert('Please Login First')
            navigate('LoginReg/')
        }
    }
    // useEffect(() => {
    //     console.log(user)
    // }, [user])

    // console.log(username)
    return (
        <>
            <div className="navbar fixed w-full z-50 border flex items-center justify-between sm:justify-around  bg-amber-400 top-0">

                <img className="logo w-[4.5%] h-[6%] scale-[130%]  object-contain" src="https://cdn-icons-png.flaticon.com/512/10026/10026257.png" alt="logo" />

                <div className="links hidden sm:block">
                    <ul className="flex gap-3">

                        <NavLink to='/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm hover:bg-blue-900">Home</NavLink>
                        <NavLink to='about/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm hover:bg-blue-900">About</NavLink>
                        <NavLink to='contact/' className="bg-blue-700 text-white font-semibold px-2 py-1 rounded-sm hover:bg-blue-900">Contact</NavLink>

                    </ul>

                </div>
                <div className="auth-btn flex gap-5">
                    {/* <NavLink to={user?'newPost/':'loginReg/'} className="bg-green-600 hover:bg-green-800 text-white font-semibold px-3 py-1 rounded-sm flex items-center"><IoMdAdd className="font-bold text-2xl" />New Post</NavLink> */}
                    <button onClick={handle} className="bg-green-600 hover:bg-green-800 text-white font-semibold px-3 py-1 rounded-sm flex items-center cursor-pointer"><IoMdAdd className="font-bold text-2xl" />New Post</button>
                    {user
                        ? <div className="flex items-center justify-center gap-[2px]">
                            <h1 className="border flex  items-center justify-center font-bold text-xl p-1 rounded-sm bg-violet-700 text-white">{user}</h1>
                            <button className="bg-pink-700 hover:bg-pink-900 text-white font-semibold px-2 py-1 rounded-sm cursor-pointer" onClick={handleLogout}>Logout</button>
                        </div>
                        : <NavLink to='loginReg/' className="bg-pink-700 hover:bg-pink-900 text-white font-semibold px-2 py-1 rounded-sm cursor-pointer">Login/Register</NavLink>
                    }


                </div>
                <div className="toggle-container sm:hidden">
                    <button onClick={() => setMenu(!menu)} >{menu ? <RxCross2 className="text-3xl font-semibold text-white" /> : <FaBars className="text-white font-semibold text-2xl" />}</button>
                </div>
            </div>

            {/* mobile menu  */}
            <div className={`menu ${menu ? 'block' : 'hidden'} mt-[70px]`}>
                <ul className="bg-amber-700 text-white font-semibold p-1 ">
                    <NavLink to='/' className="border p-2">Home</NavLink>
                    <NavLink to='about/' className="border p-2">About</NavLink>
                    <NavLink to='contact/' className="border p-2">Contact</NavLink>
                </ul>
            </div>
        </>

    )
}