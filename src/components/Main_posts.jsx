import { Card } from "./Card";

export function Main_posts({ posts }) {
    return (
        <>
            <div className={`border gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center p-3`}>
                {posts?.map((item)=>
                   <Card key={item.id} item={item}/>
                )}
            </div>
        </>
    )
}