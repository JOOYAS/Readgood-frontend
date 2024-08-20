import { Link } from "react-router-dom";
import bookPH from "../images/book-placeholder.jpg";

const BookCard = (props) => {
    const book = props.book;

    return (
        <article className="group w-auto bg-lime-50 shadow-lg hover:shadow-xl hover:shadow-slate-500 rounded-b-lg overflow-hidden flex flex-col h-full transition-shadow duration-300">
            <Link to={`/books/${book._id}`} className="flex flex-col h-full">
                <div className="aspect-[5/8] overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src={book.img}
                        onError={(e) => (e.target.src = bookPH)}
                        alt={`Cover image of ${book.title}`}
                    />
                </div>
                <div className="flex flex-col justify-between flex-grow p-4">
                    <abbr title={book.title} className="no-underline">
                        <h3 className="group-hover:text-indigo-600 text-center font-bold text-xl truncate transition-colors duration-300">
                            {book.title}
                        </h3>
                    </abbr>
                    <h4 className="text-center text-base text-gray-800">
                        {book.genre}
                    </h4>
                </div>
            </Link>
        </article>
    );
};

export default BookCard;
