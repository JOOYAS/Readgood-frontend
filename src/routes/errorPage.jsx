import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-300 via-blue-200 to-gray-200 text-white text-center p-6">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-12 max-w-lg mx-auto">
                <h1 className="text-5xl font-bold text-indigo-600 mb-6">
                    Oops..!
                </h1>
                <p className="text-lg font-semibold text-gray-700 mb-6">
                    Page cannot be found. Please go back and try again.
                </p>
                <p className="text-sm text-red-500 italic mb-8">
                    {error.statusText || error.message}
                </p>
                <button
                    onClick={() => navigate(0)}
                    className="font-semibold underline bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-800 transition-colors duration-300"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
