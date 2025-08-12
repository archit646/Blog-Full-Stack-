import { Card } from "./Card";

export function Main_posts({ className }) {
    return (
        <>
            <div className={`${className} border gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center p-3`}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>



            </div>
        </>
    )
}