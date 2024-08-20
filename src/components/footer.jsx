import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-gray-100 py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} A Sample Library. All
                    rights reserved.
                </p>
                <p className="text-sm mt-2">
                    Developed by{" "}
                    <Link
                        href="#"
                        className="text-gray-400 hover:text-gray-200 hover:underline transition-colors duration-300"
                    >
                        sayooj
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
