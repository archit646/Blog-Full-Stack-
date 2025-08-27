import { Slider } from "../Slider";
import { Sidebar } from "../sidebar";
import { Main_posts } from "../Main_posts";
import { useEffect, useState } from "react";

export function Home({ posts, category, categories, recent, token }) {


    const [selectedCate, setSelectedCate] = useState('all')

    return (
        <>
            <div className='main bg-green-200 w-screen flex flex-col justify-center items-center min-h-screen'>
                <div className='trending pt-[70px] w-screen'>
                    <h1 className='text-center text-3xl font-bold'>Trending Posts</h1>
                    <Slider posts={posts} token={token} />
                </div>
                <div className='grid w-full grid-cols-12 gap-3 '>
                    <div className='col-span-4 sm:col-span-2 border bg-red-300 p-2 hidden sm:block'>
                        <h1 className='text-center text-xl sm:text-2xl font-bold p-3'>Recent Posts</h1>

                        <Sidebar posts={recent} />
                    </div>

                    <div className='col-span-12 sm:col-span-10 border bg-red-300 w-full'>
                        <h1 className='text-center text-2xl sm:text-3xl font-bold p-3'>All Posts</h1>
                        <div className='category flex sm:justify-center gap-3 w-full mx-auto bg-blue-600 p-3 overflow-x-auto'>
                            <span className={`${selectedCate === 'all' ? 'bg-green-700' : 'bg-amber-600 hover:bg-amber-800'} text-white font-semibold rounded-sm  cursor-pointer px-2 py-1`} onClick={() => setSelectedCate('all')}>All</span>
                            {categories?.map((item) => {
                                return <span key={item.id} className={`${selectedCate === item.name ? 'bg-green-700' : 'bg-amber-600 hover:bg-amber-800'} text-white text:sm font-semibold rounded-sm min-h-1 cursor-pointer whitespace-nowrap px-2 py-1`} onClick={() => setSelectedCate(item.name)}>{item.name}</span>
                            })}
                        </div>

                        <Main_posts posts={posts} selectedCate={selectedCate} />

                    </div>

                </div>

            </div >
        </>
    )
}
