export function Card({item}){
    if (!item) return null;
    return(
        <>
        <div className="card border min-w-[250px] w-[250px] h-[285px] border-black bg-slate-500 text-white rounded-sm">
            <img className="object-cover h-[65%] w-full" src={item.thumbnail} alt="image" />
            <div className="content flex flex-col gap-4 p-2">
                <h1 className="line-clamp-2 text-xl font-semibold">{item.title}</h1>
                <div className="sub-content flex justify-around">
                    <span>{item.author.username}</span>
                    <span>date</span>
                </div>
            </div>
        </div>
        </>
    )
}