import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import BookCard from "../components/bookCard";
import bookPH from "../images/book-placeholder.jpg";

export async function loader({ params }) {
    const bookres = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/books/${params.bookId}`
    );
    const book = await bookres.json();

    //forgot to add author name to book database
    //so fetching name from database
    const authorres = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/authors/${book.authorId}`
    );
    const author = await authorres.json();

    //to filter books by same authorId
    const booksbyAuthorres = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/books/by/${book.authorId}`
    );
    const booksbyAuthor = await booksbyAuthorres.json();

    return { book, author, booksbyAuthor };
}

const book = () => {
    const { book, author, booksbyAuthor } = useLoaderData();

    return (
        <div className="min-h-screen flex flex-col">
            <section className="px-16 pb-16  h-fit">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <img
                        className="object-contain "
                        src={book.img}
                        onError={(e) => (e.target.src = bookPH)}
                        alt={`cover image of ${book.title}`}
                    />
                    <div className="">
                        <h1 className="text-3xl font-bold text-gray-800 tracking-wide mb-8">
                            {book.title}
                        </h1>
                        <Link
                            className="text-2xl italic text-gray-600 hover:text-blue-800 hover:underline transition-colors duration-300"
                            to={`/authors/${author._id}`}
                        >
                            {author.name}
                        </Link>
                        <p className="text-2xl text-gray-900 leading-relaxed mt-16">
                            {book.summary}
                        </p>
                    </div>
                </div>
            </section>

            {/* books by same author*/}
            <section className="p-16 md:px-24 flex-grow bg-blue-50">
                <h2 className="text-3xl font-bold">
                    Books by {author.name} ,Author of {book.title}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
                    {booksbyAuthor.map((book) => {
                        return <BookCard key={book._id} book={book} />;
                    })}
                </div>
            </section>
        </div>
    );
};

export default book;
