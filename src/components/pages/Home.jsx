import { Slider } from "../Slider";
import { Sidebar } from "../sidebar";
import { Main_posts } from "../Main_posts";
import { useEffect, useState } from "react";
export function Home({ posts, category, recent }) {
    const [selectedCate, setSelectedCate] = useState('all')
    
    return (
        <>
            <div className='main bg-green-200 flex flex-col'>
                <div className='trending mt-[70px]'>
                    <h1 className='text-center text-3xl font-bold p-3 bg-'>Trending Posts</h1>
                    <Slider posts={posts} />
                </div>
                <div className='container grid grid-cols-12 gap-3'>
                    <div className='col-span-4 sm:col-span-2 border bg-red-300'>
                        <h1 className='text-center text-xl sm:text-3xl font-bold p-3 bg-'>Recent Posts</h1>

                        <Sidebar posts={posts} recent={recent} />
                    </div>

                    <div className='col-span-8 border sm:col-span-10 bg-red-300'>
                        <h1 className='text-center text-2xl sm:text-3xl font-bold p-3'>All Posts</h1>
                        <div className='category flex justify-center gap-3 w-[98%] mx-auto bg-blue-600 p-3'>
                            <h2 className='bg-yellow-600 text-white font-semibold rounded-sm px-2 py-1 cursor-pointer' onClick={()=>setSelectedCate('all')}>All</h2>
                            {category?.map((item) => {
                                return <h2 key={item.id} className='bg-yellow-600 text-white font-semibold rounded-sm px-2 py-1 cursor-pointer' onClick={() => setSelectedCate(item.name)}>{item.name}</h2>
                            })}
                        </div>

                        <Main_posts posts={posts} selectedCate={selectedCate} />

                    </div>

                </div>

            </div >
        </>
    )
}
