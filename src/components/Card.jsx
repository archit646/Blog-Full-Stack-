import { NavLink } from "react-router-dom";
export function Card({item}){
    if (!item) return null;
    return(
        <>
        <NavLink to={`detail/posts/${item.id}`} className="card cursor-pointer border min-w-[250px] w-[250px] h-[285px] border-black hover:scale-105 bg-slate-500 text-white rounded-sm shadow-md shadow-black transition-all duration-300 ease-in-out">
            <img className="object-cover h-[65%] w-full rounded-t-sm" src={item.thumbnail} alt="image" />
            <div className="content flex flex-col gap-2 p-2">
                <h1 className="line-clamp-2 text-xl font-semibold">{item.title}</h1>
                <div className="sub-content flex text-[10px] justify-around">
                    <span className="">Author-{item.author?.username}</span>
                    <span className="">Published-{item.created_at}</span>
                </div>
            </div>
        </NavLink>
        </>
    )
}