export function Card(){
    return(
        <>
        <div className="card border min-w-[250px] w-[250px] h-[285px] border-black bg-slate-500 text-white rounded-sm">
            <img className="object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2oJhomgauxnVZPabIUVUY_wahMwm_2NDXw&s" alt="image" />
            <div className="content flex flex-col gap-4 p-2">
                <h1 className="line-clamp-2 text-xl font-semibold">This is Title</h1>
                <div className="sub-content flex justify-around">
                    <span>author</span>
                    <span>date</span>
                </div>
            </div>
        </div>
        </>
    )
}