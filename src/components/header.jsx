import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/login/loginSlice";

const Header = () => {
    const dispatch = useDispatch()
    const isloggedin = useSelector((state) => state.login.loggedIn);
    const user = useSelector((state) => state.login.user);

    const logoutHandler= ()=> {
        dispatch(logout())
    }

    return (
        <>
            <header className="flex justify-between px-5 md:px-24 py-2 items-center bg-blue-100 text-blue-900 z-10 sticky shadow-lg shadow-cyan-500/50 top-0">
                <div className="flex flex-row items-center">
                    <img
                        src="/books-svgrepo-com.svg"
                        alt="Logo"
                        className="w-10 h-10 md:w-16 md:h-16"
                    />
                    <h1 className="text-3xl md:text-4xl font-black">
                        ReadGood.org
                    </h1>
                </div>
                <nav>
                    <ul className="flex gap-8 text-3xl font-normal ">
                        <li>
                            <Link
                                to={"/"}
                                className="font-light hover:text-blue-600 hover:underline transition-colors duration-500 flex items-center"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/books"}
                                className="font-light hover:text-blue-600 hover:underline transition-colors duration-500 flex items-center"
                            >
                                Books
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/authors"}
                                className="font-light hover:text-blue-600 hover:underline transition-colors duration-500 flex items-center"
                            >
                                Authors
                            </Link>
                        </li>
                        <li>
                            {isloggedin ? (
                                <Link
                                    to={"/"}
                                    onClick={logoutHandler}
                                    className="font-light hover:text-blue-600 hover:underline transition-colors duration-500 flex items-center"
                                >
                                    Logout
                                </Link>
                            ) : (
                                <Link
                                    to={"/login"}
                                    className="font-light hover:text-blue-600 hover:underline transition-colors duration-500 flex items-center"
                                >
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
                {isloggedin ? (
                    <div className="flex items-center justify-center font-semibold text-5xl text-white bg-teal-500 rounded-full size-16 capitalize">
                        {user.name.charAt(0)}
                    </div>
                ) : (
                    ""
                )}
            </header>
        </>
    );
};

export default Header;
