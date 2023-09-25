import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {

    let { user, logout } = useContext(AuthContext);




    let handellogout = () => {
        console.log('hello')
        logout()
            .then(() => {

            })
            .catch(error => error.message)


    }

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

                <div className="ml-20">

                    {/* <div className={`hover:${user.email} hover:bg-white`}>

                        {user ? user.displayName : ""}
                    </div> */}


                    {
                        user ? <>  <div className="relative group">
                            <div className="hover:text-white">
                                <div className=" absolute opacity-0 bg-white text-black p-2 rounded-sm transition-opacity duration-300 ease-in-out transform translate-y-10 -translate-x-20 group-hover:opacity-100 whitespace-nowrap w-auto">
                                    {user.email}
                                </div>

                                {user ? <> <div className='grid grid-cols-2'> <div>  <img className='w-8 rounded-xl' src={user.photoURL} /> </div>





                                    <div>   <button onClick={handellogout} className='text-xl text-bold'> LogOut </button> </div>  </div>  </> : ""}
                            </div>

                        </div> </> : <>  <ul className="menu menu-horizontal px-1 text-white text-xl">
                            <li> <Link to='/signin'> Sign In </Link> </li>
                            <li> <Link to='/signup'> Sign Up </Link> </li>
                        </ul></>
                    }

                    {/* <div className="relative group">
                        <div className="hover:text-white">
                            {user ? <><img className='w-8 rounded-xl' src={user.photoURL} /> </> : ""}
                        </div>
                        <div className="absolute opacity-0 bg-white text-black p-2 rounded-lg transition-opacity duration-300 ease-in-out transform translate-y-2 group-hover:opacity-100">
                            {user.email}
                        </div>
                    </div> */}



                    {/* <ul className="menu menu-horizontal px-1 text-white text-xl">
                        <li> <Link to='/signin'> Sign In </Link> </li>
                        <li> <Link to='/signup'> Sign Up </Link> </li>
                    </ul> */}

                </div>
            </div>
        </div >
    );
};

export default Navbar;