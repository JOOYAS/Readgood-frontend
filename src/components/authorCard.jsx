import { Link } from "react-router-dom";
import authorPH from "../images/author-placeholder.png";

const AuthorCard = ({ author }) => {
    return (
        <div className="group w-auto bg-white shadow-lg hover:shadow-xl hover:shadow-slate-500 rounded-lg overflow-hidden flex flex-col h-full transition-shadow duration-300">
            <Link to={`/authors/${author._id}`}>
                <div className="m-1 aspect-[4/5] overflow-hidden">
                    <img
                        src={author.img}
                        onError={(e) => (e.target.src = authorPH)}
                        alt={`image of ${author.name}`}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h2 className="group-hover:text-indigo-600 py-2 text-center font-bold text-xl transition-colors duration-300">
                    {author.name}
                </h2>
            </Link>
        </div>
    );
};

export default AuthorCard;
