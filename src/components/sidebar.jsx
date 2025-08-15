import { NavLink } from "react-router"
export function Sidebar({ posts }) {
   
    return (
        
        <>
            <div className="flex flex-col gap-2">
                {posts && posts.length>0?posts.map((item) => {
                   return <div key={item.id} className="border-t-2 border-black flex items-center p-3 bg-gray-600 text-white shadow-sm shadow-black gap-2">
                        <img className="size-[20%] object-cover" src={item.thumbnail} alt="" />
                        <NavLink to={`detail/${item.id}`} className="line-clamp-2 break-words font-semibold">{item.title}</NavLink>
                    </div>

                }):<h1 className="text-center text-xl font-bold text-blue-700 p-2">No Posts</h1>}

            </div>
        </>
    )
}