import { Slider } from "../Slider";
import { Sidebar } from "../sidebar";
import { Main_posts } from "../Main_posts";
import { useEffect, useState } from "react";

export function Home({ posts, category, categories, recent, token }) {


    const [selectedCate, setSelectedCate] = useState('all')
    const [term, setTerm] = useState('')
    const [sPosts, setSposts] = useState([])
    useEffect(() => {
        if (term === '') {
            setSposts([])
        }
        else {
            const filterPosts = posts.filter(post => post.title.toLowerCase().includes(term.toLocaleLowerCase()))
            setSposts(filterPosts)

        }

    }, [term, posts])




    return (
        <>
            <div className='main bg-green-800  flex flex-col justify-center items-center min-h-screen w-full'>
                <div className='trending pt-[70px] w-full'>
                    <h1 className='text-center text-3xl font-bold text-white'>Trending Posts</h1>
                    <Slider posts={posts} token={token} />
                </div>
                <div className='grid w-full grid-cols-12 gap-3'>
                    <div className='col-span-4 sm:col-span-2 border bg-red-300 p-2 hidden sm:block'>
                        <h1 className='text-center text-xl sm:text-2xl font-bold p-3'>Recent Posts</h1>

                        <Sidebar posts={recent} />
                    </div>

                    <div className='col-span-12 sm:col-span-10 border bg-red-300 w-full'>
                        <h1 className='text-center text-2xl sm:text-3xl font-bold p-3'>All Posts</h1>
                        <div className='category flex sm:justify-between gap-3 w-full mx-auto bg-blue-600 p-3 overflow-hidden'>
                            <div className="category flex sm:justify-center gap-3 w-full mx-auto">
                                <span className={`${selectedCate === 'all' ? 'bg-green-700' : 'bg-amber-600 hover:bg-amber-800'} text-white font-semibold rounded-sm  cursor-pointer px-2 py-1`} onClick={() => setSelectedCate('all')}>All</span>
                                {categories?.map((item) => {
                                    return <span key={item.id} className={`${selectedCate === item.name ? 'bg-green-700' : 'bg-amber-600 hover:bg-amber-800'} text-white text:sm font-semibold rounded-sm min-h-1 cursor-pointer whitespace-nowrap px-2 py-1`} onClick={() => setSelectedCate(item.name)}>{item.name}</span>
                                })}
                            </div>
                            <div className="">
                                <input type="search" placeholder="Search" className="p-1 border col-span-10 bg-white text-gray-600 rounded-sm" value={term} onChange={(e) => setTerm(e.target.value.trim())}></input>
                                {/* <button className="col-span-2 flex items-center cursor-pointer" onClick={handleSposts}>S</button> */}

                            </div>
                        </div>

                        <Main_posts posts={posts} selectedCate={selectedCate} sPosts={sPosts} />

                    </div>

                </div>

            </div >
        </>
    )
}
