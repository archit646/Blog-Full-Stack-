import axios from "axios"
import { useEffect, useState } from "react"


export function LoginReg() {

    const [active, setActive] = useState('login')
    const [registerData, setRegisterData] = useState({ 'username': '', 'email': '', 'password': '' })
    const [loginData, setLoginData] = useState({ 'email': '', 'password': '' })
    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }
    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/register/', registerData)
            // setRegisterData({ 'username': '', 'email': '', 'password': '' })
            console.log(res.data)
            alert('Registerd Successfully')
            setRegisterData({ 'username': '', 'email': '', 'password': '' })
           
            setActive('login')
        } catch (error) {
            console.log(error)
        }
    }
   
    return (
        <>
            <div className="h-screen grid grid-cols-12 pt-[62px]">
                <div className="col-span-6">
                    <img className=" w-full h-full object-contain" src="https://static.vecteezy.com/system/resources/previews/028/046/128/non_2x/users-access-emails-from-multiple-devices-vector.jpg"></img>

                </div>
                <div className="col-span-6 flex justify-center items-center flex-col gap-10 bg-white">
                    <div className="options-container flex border-b-1 w-full justify-center pb-1 gap-5 text-black">
                        <button className={`flex  justify-center items-center cursor-pointer font-semibold px-4 py-1 ${active == 'login' ? 'border-b-5 border-black' : 'border-none'}`} onClick={() => setActive('login')}>Login</button>
                        <button className={`flex  justify-center items-center cursor-pointer font-semibold px-4 py-1 ${active == 'register' ? 'border-b-5 border-black' : 'border-none'}`} onClick={() => setActive('register')}>Register</button>
                    </div>
                    <div className="form-container w-[70%] h-[80%] p-3  rounded-2xl ">
                        {active == 'login'
                            ? <form action="" className="login-form flex flex-col gap-5 p-3 rounded-2xl  bg-gray-200">
                                <div className="row">
                                    <span className=" w-full font-semibold" >Email</span>
                                    <input name="email" value={loginData.email} type="email" placeholder="Email" className="border w-full p-2 rounded-md" onChange={handleLoginChange}></input>
                                </div>
                                <div className="row">
                                    <span className=" w-full font-semibold">Password</span>
                                    <input name="password" value={loginData.password} type="password" placeholder="Password" className="border w-full p-2 rounded-md" onChange={handleLoginChange}></input>
                                </div>
                                <button type="submit" className="w-[30%] mx-auto bg-blue-600 font-semibold text-white p-1 flex items-center justify-center rounded-2xl cursor-pointer">Login</button>


                            </form>
                            : <form onSubmit={handleSubmit} className="register-form flex flex-col gap-5 p-3 bg-gray-200 rounded-2xl">
                                <div className="row">
                                    <span className=" w-full font-semibold">Username</span>
                                    <input name="username" value={registerData.username} type="text" placeholder="Username" className="border w-full p-2 rounded-md" onChange={handleRegisterChange}></input>
                                </div>
                                <div className="row">
                                    <span className=" w-full font-semibold">Email</span>
                                    <input name="email" value={registerData.email} type="email" placeholder="Email" className="border w-full p-2 rounded-md" onChange={handleRegisterChange}></input>
                                </div>
                                <div className="row">
                                    <span className=" w-full font-semibold">Password</span>
                                    <input name="password" type="password" value={registerData.password} placeholder="Password" className="border w-full p-2 rounded-md" onChange={handleRegisterChange}></input>
                                </div>
                                {/* <div className="row">
                                    <span className=" w-full font-semibold">Confirm Password</span>
                                    <input type="confirm_password" placeholder="Password" className="border w-full p-2 rounded-md" onChange={handleRegisterChange}></input>
                                </div> */}
                                <div className="row flex gap-2 items-center">
                                    <input type="checkbox" className=""></input>
                                    <span className=" w-full font-semibold">I agree to Terms & Conditions</span>
                                </div>

                                <button type="submit" className="w-[30%] mx-auto bg-blue-600 font-semibold text-white p-1 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-blue-800">Register</button>


                            </form>
                        }


                    </div>
                </div>
            </div>
        </>
    )
}