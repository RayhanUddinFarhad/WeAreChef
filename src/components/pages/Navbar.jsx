import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import ActiveLink from '../activeLink/ActiveLink';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log (user)


    const handleLogOut = () => { 

        logOut()
        .then (() => { 


        })
        .catch (err => {

            console.log (err)
         })
    }
    return (
        <div>



            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to="/">Home</ActiveLink></li>

                            <li><ActiveLink>Blog</ActiveLink></li>

                            {

user ? <>
    <div className="w-10 rounded-full avatar">
        <img src={user.photoURL} />

    </div>
    <button onClick={handleLogOut} className='btn-main'>LogOut</button>

</> : <Link to="logIn" className="btn-main">Log In</Link>

}

                        </ul>
                    </div>
                    <a className="font-extrabold normal-case text-3xl"> WeAre<span className='text-green-600'>Chef</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><ActiveLink to="/">Home</ActiveLink></li>

                        <li><ActiveLink to= "/blogs">Blog</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end items-center hidden lg:block">

                    {

                        user ? <>
                            <div className="w-10  tooltip" data-tip={user.displayName && user.displayName}>
                                <img className='w-10 rounded-full' src={user.photoURL} />

                            </div>
                            <button onClick={handleLogOut} className='btn-main'>LogOut</button>

                        </> : <Link to="logIn" className="btn-main">Log In</Link>

                    }


                </div>
            </div>

        </div>
    );
};

export default Navbar;