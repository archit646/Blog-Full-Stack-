import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"


export function LoginReg({setUser}) {
    const navigate=useNavigate()

    const [active, setActive] = useState('login')
    const [registerData, setRegisterData] = useState({ 'username': '', 'email': '', 'password': '' , 'check':false , 'confirm_password':'' })
    const [loginData, setLoginData] = useState({ 'username': '', 'password': '' })
    
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
    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
         if(registerData.username==='' || registerData.email==='' || registerData.password==='' || registerData.confirm_password===''){
            alert('All Fields Are Required')
            return;
        }
        if(registerData.password!=registerData.confirm_password){
            alert('Confirm Password is not Same')
            return;
        }
        if(registerData.check===false){
            alert('Please Check the Box')
            return;
        }
       
        const payload={
            username:registerData.username,
            email:registerData.email,
            password:registerData.password
        }
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/register/' || 'http://myapp00.pythonanywhere.com/api/register/', payload)
            // setRegisterData({ 'username': '', 'email': '', 'password': '' })
            console.log(res.data)
            alert('Registerd Successfully')
            setRegisterData({ 'username': '', 'email': '', 'password': '' , 'confirm_password':'' , 'check':false })
           
            setActive('login')
        } catch (error) {
            console.log(error)
        }
    }
    const handleLoginSubmit=async(e)=>{
        e.preventDefault()

        if (loginData.username === '' || loginData.password === '') {
            alert('All Fields Are Required')
            return;
        }
        if (loginData.username === '' || loginData.password === '') {
            alert('All Fields Are Required')
            return;
        }
        const payload={username:loginData.username,password:loginData.password}
        try{
            const res=await axios.post('http://127.0.0.1:8000/api/token/' || 'http://myapp00.pythonanywhere.com/api/token/',payload)
            // jwt token
            localStorage.setItem('access_token',res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            localStorage.setItem('username',loginData.username)
            alert('Login Successfully')
            setUser(loginData.username)
            navigate('/')
            console.log('login Successfull')
        }catch(error){
            alert('Wrong Username or Password')
            

        }
    }
    // useEffect(() => {
    //     const savedUser = localStorage.getItem('username')
    //         if(savedUser) {
    //           setUser(savedUser)  
    //         }
    // },[])
   
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
                            ? <form onSubmit={handleLoginSubmit} className="login-form flex flex-col gap-5 p-3 rounded-2xl  bg-gray-200">
                                <div className="row">
                                    <span className=" w-full font-semibold" >Username</span>
                                    <input name="username" value={loginData.username} type="text" placeholder="Username" className="border w-full p-2 rounded-md" onChange={handleLoginChange}></input>
                                </div>
                                <div className="row">
                                    <span className=" w-full font-semibold">Password</span>
                                    <input name="password" value={loginData.password} type="password" placeholder="Password" className="border w-full p-2 rounded-md" onChange={handleLoginChange}></input>
                                </div>
                                <button type="submit" className="w-[30%] mx-auto bg-blue-600 font-semibold text-white p-1 flex items-center justify-center rounded-2xl cursor-pointer">Login</button>


                            </form>
                            : <form onSubmit={handleRegisterSubmit} className="register-form flex flex-col gap-5 p-3 bg-gray-200 rounded-2xl">
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
                                <div className="row">
                                    <span className=" w-full font-semibold">Confirm Password</span>
                                    <input type="password" name="confirm_password" placeholder="Password" className="border w-full p-2 rounded-md" onChange={handleRegisterChange}></input>
                                </div>
                                <div className="row flex gap-2 items-center">
                                    <input type="checkbox" value={registerData.check} className="" name="check" onChange={handleRegisterChange}></input>
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