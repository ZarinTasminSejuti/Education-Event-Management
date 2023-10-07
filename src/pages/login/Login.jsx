import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'));
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex">
                <div className=" rounded-lg w-full shadow-xl bg-amber-100">
                    <div className="card-body" >
                        <h2 className="font-bold text-2xl">Login into account</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="mt-5">Do not have an account?  <Link to="./register" className="text-blue-600 font-semibold">Register here</Link></p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;