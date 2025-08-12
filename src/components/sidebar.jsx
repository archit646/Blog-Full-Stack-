export function Sidebar({ posts }) {
    return (
        <>
            <div className="border">
                {posts?.map((item) => {
                   return <div key={item.id} className="border-t-2 flex items-center p-3 gap-2">
                        <img className="size-[20%] object-cover" src={item.thumbnail} alt="" />
                        <h2 className="line-clamp-2 break-words font-semibold">{item.title}</h2>
                    </div>

                })}

            </div>
        </>
    )
}