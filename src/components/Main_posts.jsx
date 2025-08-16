import { Card } from "./Card";
import { useLocation } from "react-router";

export function Main_posts({ posts, selectedCate }) {
    const location=useLocation();
    // console.log(selectedCate)
    var filterdPosts = selectedCate == 'all' || !selectedCate
        ? posts
        : posts.filter((post) => post.category === selectedCate)




    return (
        <>
            <div className={` gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center p-3`}>
                {filterdPosts && filterdPosts.length > 0?(filterdPosts.map((item) =>
                    <Card key={item.id} item={item} />
                )):<h1 className=" col-span-full text-3xl font-bold text-blue-800">No Posts</h1>}
            </div>
        </>
    )
}