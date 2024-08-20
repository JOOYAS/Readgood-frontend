import { useLoaderData } from "react-router";
import BookCard from "../components/bookCard";

export async function loader() {
    const res = await fetch("http://localhost:3000/books");
    const books = await res.json();

    return { books };
}

const Books = () => {
    const { books } = useLoaderData();

    return (
        <div className="min-h-screen">
            <section className="px-16 md:px-24 py-4">
                <h1 className="text-3xl py-4 text-blue-700">books list</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
                    {books.map((book) => {
                        return <BookCard key={book._id} book={book} />;
                    })}
                </div>
            </section>
        </div>
    );
};

export default Books;
