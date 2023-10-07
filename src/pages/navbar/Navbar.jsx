import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

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
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              
            </div>
        </div>
    );
};

export default Navbar;
