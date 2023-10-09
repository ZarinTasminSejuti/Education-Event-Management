import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { logOut, userDetails, user } = useContext(AuthContext);
  // console.log(userDetails);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        swal("Logged Out succesfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const colorText = {
    background: "linear-gradient(90deg, #ff6600, #fff, #ff6600)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
  const navLinks = (
    <>
      <li className="text-lg rounded-xl text-white hover:bg-[#ff6600]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg rounded-xl text-white hover:bg-[#ff6600]">
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li className="text-lg rounded-xl text-white hover:bg-[#ff6600]">
        <NavLink to="/events">Events</NavLink>
      </li>
      <li className="text-lg rounded-xl text-white hover:bg-[#ff6600]">
        <NavLink to="/checkout">CheckOut</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar flex-col lg:flex-row justify-between items-center mx-auto max-w-[1440px] bg-black bg-opacity-70 lg:h-24 inset-x-0 top-0 absolute z-20">
     
      <div className="lg:w-1/2 flex flex-col lg:flex-row text-white">
       
        <p className="btn btn-ghost normal-case text-4xl" style={colorText}>
          EventifyEDU
        </p>
      </div>
      <div className=" lg:navbar-center text-white  ">
        <ul className="menu menu-horizontal px-1 flex justify-center lg:flex">{navLinks}</ul>
      </div>
      <div className="lg:w-1/2 flex flex-row justify-end text-white p-2 gap-3">
        {user ? (
          <>
            <img
              src={userDetails.photoURL}
              alt={userDetails.displayName}
              className="w-10 rounded"
            />

            <span>{userDetails.displayName}</span>
            <button
              className="btn btn-ghost hover:bg-red-600"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-ghost text-[#ff6600] hover:text-white hover:bg-[#ff6600]">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn text-[#ff6600] btn-ghost hover:bg-[#ff6600] hover:text-white">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};



export default Navbar;
