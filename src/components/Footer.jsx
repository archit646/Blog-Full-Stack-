import { NavLink } from "react-router-dom"
export function Footer() {
    return (

        <>

            <div className="relative">
                <div className="w-full h-auto bottom-0 bg-black grid grid-cols-12">
                    <div className="col-span-4  flex items-center justify-center">
                        <img className="logo w-[60%] h-[60%]  object-contain scale-150" src="https://cdn-icons-png.flaticon.com/512/10026/10026257.png" alt="logo" />
                    </div>
                    <div className="h-fit col-span-8 mx-auto md:py-4 py-4 flex  flex-col justify-between items-center">


                        <div className="flex flex-col gap-4 items-center">
                            <ul className="flex lg:gap-6 md:gap-4 md:flex-row flex-col justify-center md:text-xl text-lg md:mt-0 mt-4 md:font-semibold text-gray-300">
                                <li className="">
                                    <NavLink to='/' className="text-gold">Home</NavLink >
                                </li >
                                <li className="" >
                                    <NavLink to='about/' className="hover:text-gold" > About</NavLink >
                                </li >
                                <li className="" >
                                    <NavLink to='contact/' className="hover:text-gold" > Contact</NavLink >
                                </li >
                            </ul >

                            <span className=" mx-auto ">
                                <h3 className="text-semibold text-center lg:text-2xl text-xl text-white md:mt-6 ">Where magic and mastery mix, unlocking unimaginable possibilities.</h3>
                            </span >
                        </div >
                        {/* < !--Socials --> */}
                        <div>
                            <ul className="flex gap-2 justify-center md:py-0 py-4 md:flex-col lg:flex-row text-gray-300">
                                <li className="">
                                    <NavLink className=""><i className="uil uil-instagram lg:text-4xl md:text-3xl text-4xl hover:text-gold"></i></NavLink >
                                </li >
                                <li className="" >
                                    <NavLink className="" > <i className="uil uil-facebook lg:text-4xl md:text-3xl text-4xl hover:text-gold" ></i ></NavLink >
                                </li >
                                <li className="" >
                                    <NavLink className="" > <i className="uil uil-linkedin lg:text-4xl md:text-3xl text-4xl hover:text-gold" ></i ></NavLink >
                                </li >
                                <li className="" >
                                    <NavLink className="" > <i className="uil uil-telegram lg:text-4xl md:text-3xl text-4xl hover:text-gold" ></i ></NavLink >
                                </li >
                            </ul >
                        </div >
                        {/* < !--Horizontal line-- > */}
                    <div className="md:w-[70%] sm:w-[80%] w-[96%] mx-auto flex md:gap-4 gap-2 items-center justify-center" >
                        <hr className="w-full md:border-2 border-gold" />
                        
                        <hr className="w-full md:border-2 border-gold" />
                    </div >


                    <div className="flex justify-center items-center py-4 capitalize" >
                        <h4 className="text-white sm:text-xl font-smibold text-lg" >& copy; 2024 Designed by Sammy - TG</h4 >
                    </div >
                    </div >
                    
                </div >
            </div>
        </>
    )

}