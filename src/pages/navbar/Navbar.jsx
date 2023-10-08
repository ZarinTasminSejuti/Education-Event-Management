import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';




const Navbar = () => {

    const { logOut, userDetails, user } = useContext(AuthContext);
// console.log(userDetails);
    const handleLogOut = () => {
        logOut()
        .then(() => {
            swal("Logged Out succesfully");
            })
            .catch(error => {
               console.error(error);
        })
    }

    const colorText = {
        background: 'linear-gradient(88deg, #f3c302, #fff, #f3c302)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/events">Event Tickets</NavLink></li>
        <li><NavLink to="/">Workshop</NavLink></li>
    </>


    return (

        <div className="navbar bg-black bg-opacity-60 h-20 absolute z-10">
             
            <div className="navbar-start text-white">
                <div className="dropdown">
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl" style={colorText}>EventifyEDU</a>
            </div>
            <div className="navbar-center text-white hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end text-white p-2 gap-3">
                {
                    user ?
                    <>
                            <img src={userDetails.photoURL} alt={userDetails.displayName} className="w-10 rounded" />
                          
                        <span>{userDetails.displayName}</span>
                        <button className="btn btn-ghost" onClick={handleLogOut}>Log Out</button>
                    </>
                        :
                    <>
                        <Link to="/login"><button className="btn btn-ghost">Login</button>
                        </Link>
                         <Link to="/register"><button className="btn btn-ghost">Register</button></Link>
                    </>
                }


              

            </div>
        </div>
    );
};

export default Navbar;
