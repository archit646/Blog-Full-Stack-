export function Footer() {
    return (

        <>

            <div className="relative">
                <div className="w-full h-auto bottom-0 bg-black">
                    <div className="h-fit w-[80%] mx-auto md:py-5 py-4 flex sm:flex-row flex-col justify-between items-center">
                        <div>
                            <img className="lg:w-[10rem] lg:h-[7rem] md:w-[8rem] md:h-[6rem] w-[10rem] h-[6rem] rounded-lg" src="https://images.unsplash.com/photo-1622300896044-e26a911ca3db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxOdW1iZXIlMjBTZXZlbnxlbnwwfDB8fHwxNzI4NjQ0MTAzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" />
                        </div>

                        <div className="flex flex-col gap-4 items-center">
                            <ul className="flex lg:gap-6 md:gap-4 md:flex-row flex-col justify-center md:text-xl text-lg md:mt-0 mt-4 md:font-semibold text-gray-300">
                                <li className="">
                                    <a href="" className="text-gold">Home</a >
                                </li >
                                <li className="" >
                                    <a href="" className="hover:text-gold" > About</a >
                                </li >
                                <li className="" >
                                    <a href="" className="hover:text-gold" > Products</a >
                                </li >
                                <li className="" >
                                    <a href="" className="hover:text-gold" > Gallery</a >
                                </li >
                                <li className="" >
                                    <a href="" className="hover:text-gold" > Contact</a >
                                </li >
                            </ul >

                            <div>
                                <h3 className="text-semibold text-center lg:text-2xl text-xl text-white md:mt-6 ">Where magic and mastery mix, unlocking unimaginable possibilities.</h3>
                            </div >
                        </div >
                        {/* < !--Socials --> */}
                        <div>
                            <ul className="flex gap-2 justify-center md:py-0 py-4 md:flex-col lg:flex-row text-gray-300">
                                <li className="">
                                    <a href="" className=""><i className="uil uil-instagram lg:text-4xl md:text-3xl text-4xl hover:text-gold"></i></a >
                                </li >
                                <li className="" >
                                    <a href="" className="" > <i className="uil uil-facebook lg:text-4xl md:text-3xl text-4xl hover:text-gold" ></i ></a >
                                </li >
                                <li className="" >
                                    <a href="" className="" > <i className="uil uil-linkedin lg:text-4xl md:text-3xl text-4xl hover:text-gold" ></i ></a >
                                </li >
                                <li className="" >
                                    <a href="" className="" > <i className="uil uil-telegram lg:text-4xl md:text-3xl text-4xl hover:text-gold" ></i ></a >
                                </li >
                            </ul >
                        </div >
                    </div >
                    {/* < !--Horizontal line-- > */}
                    <div className="md:w-[70%] sm:w-[80%] w-[96%] mx-auto flex md:gap-4 gap-2 items-center justify-center" >
                        <hr className="w-full md:border-2 border-gold" />
                        <h1 className="w-fit sm:text-2xl text-xl font-semibold font-serif text-white" > SEVEN</h1 >
                        <hr className="w-full md:border-2 border-gold" />
                    </div >


                    <div className="flex justify-center items-center py-4 capitalize" >
                        <h4 className="text-white sm:text-xl font-smibold text-lg" >& copy; 2024 Designed by Sammy - TG</h4 >
                    </div >
                </div >
            </div>
        </>
    )

}