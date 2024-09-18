import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import deafultpic from "../../../assets/user.png"


const Navber = () => {
    const navlink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About </NavLink></li>
        <li><NavLink to="/carrer">carrer</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlink}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={deafultpic}/>
                    </div>
                </div>

                <Link>
                    <button className="btn">Login</button>
                </Link>

            </div>
        </div>
    );
};

export default Navber;