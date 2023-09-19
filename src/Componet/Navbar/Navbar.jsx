import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {

    let { user } = useContext(AuthContext);
    console.log(user)



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to={'/'}> Home </Link> </li>
                            <li> <Link to='/alltoys'> All Toys </Link> </li>
                            <li> <Link to='/mytoys'> My Toys </Link> </li>
                            <li> <Link to='/addnewtoy'> Add New Toy </Link> </li>
                            <li> <Link to='/blog'> Blog </Link> </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white text-xl">
                        <li> <Link to={'/'}> Home </Link> </li>
                        <li> <Link to='/alltoys'> All Toys </Link> </li>
                        <li> <Link to='/mytoys'> My Toys </Link> </li>
                        <li> <Link to='/addnewtoy'> Add New Toy </Link> </li>
                        <li> <Link to='/blog'> Blog </Link> </li>

                    </ul>
                </div>
                <div className="navbar-end">

                    {user}

                    <ul className="menu menu-horizontal px-1 text-white text-xl">
                        <li> <Link to='/signin'> Sign In </Link> </li>
                        <li> <Link to='/signup'> Sign Up </Link> </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;