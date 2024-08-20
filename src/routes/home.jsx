import { useLoaderData } from "react-router";
import BookCard from "../components/bookCard";
import AuthorPhotoButton from "../components/authorPhotoButton";
import { useSelector } from "react-redux";

export async function loader() {
    const bookresponse = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/books`
    );
    const books = await bookresponse.json();

    const authorresponse = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/authors`
    );
    const authors = await authorresponse.json();

    return { books, authors };
}

const Home = () => {
    const { books, authors } = useLoaderData();
    const userData = useSelector((state) => state.login.user);

    return (
        <div className="min-h-screen">
            <section className="book-background bg-cover  px-10 md:px-24 py-20">
                <h1 className="text-7xl  text-blue-100 font-bold mb-4 bg-teal-900 bg-opacity-30 w-fit p-8">
                    Welcome, {userData ? userData.name : "Reader"}!
                </h1>
                <p className="text-3xl font-bold  bg-teal-200 bg-opacity-50 w-fit py-4 px-8">
                    {userData
                        ? "Discover books handpicked to match your interests. Start your next great read today."
                        : "Explore our collection of book details and discover your next great read."}
                </p>
            </section>

            <section className="px-2 sm:px-10 md:px-24  bg-teal-200">
                <div className="flex flex-row gap-4 py-10 overflow-x-scroll ">
                    {authors.map((author) => {
                        return (
                            <AuthorPhotoButton
                                key={author._id}
                                author={author}
                            />
                        );
                    })}
                </div>
            </section>

            <section className="px-10 md:px-24 py-4">
                <h2 className="text-3xl py-4 text-blue-700">Recommended</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 p-4">
                    {books.map((book) => {
                        return <BookCard key={book._id} book={book} />;
                    })}
                </div>
            </section>
        </div>
    );
};

export default Home;
