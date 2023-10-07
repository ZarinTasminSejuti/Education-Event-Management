import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <main className="h-screen w-full flex flex-col justify-center items-center bg-white">
                <h1 className="text-9xl font-extrabold text-black shadow-md my-5 rounded-md p-6 tracking-widest">404</h1>
                <div className="bg-amber-500 px-2 text-base rounded mt-10 top-1/2 absolute">
                    Page Not Found
                </div>
                <button className="mt-5">
                    <a
                        className="relative inline-block text-sm font-medium text-amber500 group active:text-amber-500 focus:outline-none focus:ring"
                    >
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-amber-500 group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span className="relative block px-8 py-3 bg-[#1A2238] text-amber-500 border border-current">
                            <Link to="/">Back to Home</Link>
                        </span>
                    </a>
                </button>
            </main>
        </div>
    );
};

export default ErrorPage;