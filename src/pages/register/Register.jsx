import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import { ToastContainer, toast } from 'react-toastify';


const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext);

    //form submit function
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);


  
        
        // create a new user with firebase
        createUser(email, password)
            .then(result => {
                console.log("singed in");
            
                updateProfile(auth.currentUser, {
                    displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });



            })
            .catch(error => {
                console.error(error);
        })
    }


    return (
        <div className="hero min-h-screen">
            {/* <ToastContainer /> */}
            <div className="hero-content flex">
            
                <div className=" rounded-lg w-full mt-12 shadow-xl bg-amber-100">
                    <div className="card-body" >
                        <h2 className="font-bold text-center text-2xl">Register</h2>
                        <h2 className="text-center text-gray-500 my-3 text-base">Enter your information to setup a new account</h2>

                        <form onSubmit={handleRegister}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address..." name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password..." className="input input-bordered" name="password" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
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