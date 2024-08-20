import { useLoaderData } from "react-router";
import BookCard from "../components/bookCard";
import authorPH from "../images/author-placeholder.png";

export async function loader({ params }) {
    const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/authors/${params.authorId}`
    );
    const author = await res.json();

    //to filter books by same authorId
    const booksbyAuthorres = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/books/by/${params.authorId}`
    );
    const booksbyAuthor = await booksbyAuthorres.json();

    return { author, booksbyAuthor };
}

const Author = () => {
    const { author, booksbyAuthor } = useLoaderData();

    return (
        <div className="min-h-screen flex flex-col">
            <section className="p-16 md:px-24">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                        className="max-w-xs max-h-full object-cover"
                        src={author.img}
                        onError={(e) => (e.target.src = authorPH)}
                        alt={`Picture of ${author.name}`}
                    />
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
                            {author.name}
                        </h1>
                        <p className="text-2xl text-gray-900 leading-relaxed mt-4">
                            {author.details}
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-16 md:px-24 flex-grow bg-gray-50">
                <h1 className="text-3xl font-bold">Books By {author.name}</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
                    {booksbyAuthor.map((book) => {
                        return <BookCard key={book._id} book={book} />;
                    })}
                </div>
            </section>
        </div>
    );
};

export default Author;
