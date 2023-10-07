import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    // const colorText = {
    //     background: 'linear-gradient(88deg, #f3c302, #fff, #f3c302)',
    //     WebkitBackgroundClip: 'text',
    //     backgroundClip: 'text',
    //     color: 'transparent',
    // };

    const { signIn } = useContext(AuthContext);
    
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        signIn(email, password)
        .then(result => {
            console.log(result);
            })
            .catch(error => {
               console.error(error);
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex">
                <div className=" rounded-lg w-full shadow-xl bg-amber-100">
                    <div className="card-body" >
                        {/* <div className="bg-black bg-opacity-60 rounded-md text-center py-2">
                        <a className="btn btn-ghost normal-case text-4xl" style={colorText}>EventifyEDU</a>
                        </div> */}
                   
                        <h2 className="font-bold text-center text-3xl">Login into account</h2>
                        <h2 className="text-center text-gray-500 my-3 text-base">Use your credentials to access your account</h2>

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
                                <label className="label my-2">
                                    <div>
                                    <input type="checkbox"/>
                                    <span  className="ml-2 text-black">Remember me</span>
                                    </div>
                                    <a href="#" className="label-text-alt link link-hover text-sm text-black">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className="mt-5 text-center">Do not have an account?  <Link to="/register" className="text-blue-600 font-semibold">Register here</Link></p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;