import { Card } from "./Card";
import { useLocation } from "react-router";

export function Main_posts({ posts, selectedCate, sPosts}) {
    const location=useLocation();
    // console.log(sPosts)
    var catePosts = selectedCate == 'all' || !selectedCate
        ? posts
        : posts.filter((post) => post.category === selectedCate)
    
    const finalPosts = sPosts.length > 0 ? sPosts : catePosts;




    return (
        <>
            <div className={`w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center p-3`}>
                
                {finalPosts.length > 0?(finalPosts.map((item) =>
                    <Card key={item.id} item={item} />
                )) : <h1 className=" col-span-full text-3xl font-bold text-blue-800">No Posts</h1>}
                
              
            </div>
        </>
    )
}