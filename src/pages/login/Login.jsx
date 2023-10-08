import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    // const colorText = {
    //     background: 'linear-gradient(88deg, #f3c302, #fff, #f3c302)',
    //     WebkitBackgroundClip: 'text',
    //     backgroundClip: 'text',
    //     color: 'transparent',
    // };

    const { signIn, signInGoogle } = useContext(AuthContext);

    //navigate after login
    const navigate = useNavigate();
    
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        signIn(email, password)
        .then(() => {
            swal("You're logged in!", "Login Successful!", "success");
            e.target.reset();
            navigate('/');
            })
            .catch(() => {
                swal("Login Failed!", "Wrong credentials! Please login again.", "error");
        })
    }

    const handleGoogle = () => {
        signInGoogle()
        .then(() => {
            swal("You're logged in!", "Login Successful!", "success");
            navigate('/');
            })
            .catch(() => {
                swal("Login Failed!", "Wrong credentials! Please login again.", "error");
        })
}

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Svfs2fk/business-women-signature-document.jpg)'}}>
            <div className="hero-content flex">
                <div className=" rounded-lg w-full mt-10 shadow-xl bg-opacity-80 bg-white">
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
                                <button className="btn text-white bg-blue-600 hover:text-white hover:bg-blue-800">Login</button>
                            </div>
                        </form>

                        <p className="mt-4 text-center text-gray-500">or login with</p>

                        {/* google button */}
                        <p className="text-center my-2"> <button onClick={handleGoogle} className="btn w-1/2 text-white bg-red-500 hover:bg-red-700"><FaGoogle></FaGoogle>Google</button></p>
                        
                        <p className="text-center">Do not have an account?  <Link to="/register" className="text-blue-600 font-semibold">Register here</Link></p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;