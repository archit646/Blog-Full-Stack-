import { useState } from "react"

export function LoginReg() {
    const [active, setActive] = useState('login')
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
                                    <span className=" w-full font-semibold">Email</span>
                                    <input type="email" placeholder="Email" className="border w-full p-2 rounded-md"></input>
                                </div>
                                <div className="row">
                                    <span className=" w-full font-semibold">Password</span>
                                    <input type="password" placeholder="Password" className="border w-full p-2 rounded-md"></input>
                                </div>
                                <button type="submit" className="w-[30%] mx-auto bg-blue-600 font-semibold text-white p-1 flex items-center justify-center rounded-2xl cursor-pointer">Login</button>


                            </form>
                            : <form action="" className="register-form flex flex-col gap-5 p-3 bg-gray-200 rounded-2xl">
                                <div className="row">
                                    <span className=" w-full font-semibold">Name</span>
                                    <input type="text" placeholder="Email" className="border w-full p-2 rounded-md"></input>
                                </div>
                                <div className="row">
                                    <span className=" w-full font-semibold">Email</span>
                                    <input type="email" placeholder="Email" className="border w-full p-2 rounded-md"></input>
                                </div>
                                <div className="row">
                                    <span className=" w-full font-semibold">Password</span>
                                    <input type="password" placeholder="Password" className="border w-full p-2 rounded-md"></input>
                                </div>
                                <div className="row">
                                    <span className=" w-full font-semibold">Confirm Password</span>
                                    <input type="password" placeholder="Password" className="border w-full p-2 rounded-md"></input>
                                </div>
                                <div className="row flex gap-2 items-center">
                                    <input type="checkbox" className=""></input>
                                    <span className=" w-full font-semibold">I agree to Terms & Conditions</span>
                                </div>
                                
                                <button type="submit" className="w-[30%] mx-auto bg-blue-600 font-semibold text-white p-1 flex items-center justify-center rounded-2xl cursor-pointer">Register</button>


                            </form>
                        }


                    </div>
                </div>
            </div>
        </>
    )
}