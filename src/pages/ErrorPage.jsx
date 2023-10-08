import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-amber-50">
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-xl overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-9xl font-bold text-black">404</h1>
                        <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                        <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist.</p>

                        <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-black hover:to-amber-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                        <Link to="/">BACK TO HOME</Link>
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;