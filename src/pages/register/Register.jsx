import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';
// import { ToastContainer, toast } from 'react-toastify';


const Register = () => {

    const { createUser, setNameAndPhoto, logOut } = useContext(AuthContext);

 //navigate after login
    const navigate = useNavigate();
    
    //form submit function
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');


        // create a new user with firebase
        createUser(email, password)
            .then(() => {
                swal("You're registered!", "Registration Successful!", "success");
                
                logOut().then(() => {
                    // Sign-out and navigate to login
                    navigate("/login");
                  }).catch((error) => {
                    // An error happened.
                    console.log(error);
                  });
                })
            .catch((error) => {
                console.log(error);
              });
        
        // update new user name and photo
        setNameAndPhoto({
            displayName: name,
            photoURL: photo
        });

        
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Svfs2fk/business-women-signature-document.jpg)'}}>
            {/* <ToastContainer /> */}
            <div className="hero-content flex">
            
                <div className=" rounded-lg w-full mt-12 shadow-xl bg-opacity-80 bg-white">
                    <div className="card-body" >
                        <h2 className="font-bold text-center text-2xl">Create a new account</h2>
                        <h2 className="text-center text-gray-500 my-3 text-base">Enter your information to setup a new account</h2>

                        <form onSubmit={handleRegister}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name *</span>
                                </label>
                                <input type="text" placeholder="Name..." name="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo url..." name="photo" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email *</span>
                                </label>
                                <input type="email" placeholder="Email Address..." name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password *</span>
                                </label>
                                <input type="password" placeholder="Password..." className="input input-bordered" name="password" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-blue-600 hover:text-white hover:bg-blue-800">Register</button>
                            </div>
                        </form>

                        <p className="mt-5 text-center">Already have an account?  <Link to="/login" className="text-blue-600 font-semibold">Login</Link></p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Register;