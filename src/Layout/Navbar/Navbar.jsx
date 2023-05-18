import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='sticky top-0'>
            <div className="navbar bg-base-100 w-full max-w-7xl mx-auto">
                
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/all-toys">All Toys</NavLink></li>
                        <li><NavLink to="/my-toys">My Toys</NavLink></li>
                        <li><NavLink to="/add-toys">Add A Toy</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                    </ul>
                    </div>

                    <div className='inline-flex items-center'>
                        <img src="zyro-image.ico" className='w-10 h-10 ml-2' alt="" />
                        <Link to="/" className="ml-4 normal-case text-xl">Action Avenue</Link>
                    </div>
                    
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/all-toys">All Toys</NavLink></li>
                        <li><NavLink to="/my-toys">My Toys</NavLink></li>
                        <li><NavLink to="/add-toys">Add A Toy</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                    </ul>
                </div>
                
                <div className="navbar-end">
                    <Link to="/login">
                    
                        <button className="bg-[#65C3C8] px-3 py-2 rounded-lg text-white">Login</button>

                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Navbar;
