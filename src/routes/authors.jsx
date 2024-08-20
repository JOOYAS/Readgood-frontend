import { useLoaderData } from "react-router";
import AuthorCard from "../components/authorCard";

export async function loader() {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/authors`);
    const authors = await res.json();
    console.log(authors);

    return { authors };
}

const Authors = () => {
    const { authors } = useLoaderData();
    console.log(authors);

    return (
        <div className="min-h-screen">
            <section className="px-16 md:px-24 py-4">
                <h1 className="text-3xl py-4 text-blue-700">Authors</h1>
                <div className="grid sm:grid-cols-3 xl:grid-cols-6 gap-4 p-4">
                    {authors.map((author) => {
                        return <AuthorCard key={author._id} author={author} />;
                    })}
                </div>
            </section>
        </div>
    );
};

export default Authors;
