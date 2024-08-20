import React from "react";
import { Link } from "react-router-dom";
import authorPH from "../images/author-placeholder.png";

const AuthorPhotoButton = (props) => {
    const { author } = props;
    return (
        <>
            <Link to={`/authors/${author._id}`} className="group">
                <div className="w-32 md:w-44 aspect-square overflow-hidden rounded-full group-hover:border-8 group-hover:border-blue-400">
                    <img
                        src={author.img}
                        onError={(e) => (e.target.src = authorPH)}
                        alt={`image of ${author.name}`}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-center font-extrabold text-xl group-hover:text-blue-700">
                    {author.name}
                </h3>
            </Link>
        </>
    );
};

export default AuthorPhotoButton;
