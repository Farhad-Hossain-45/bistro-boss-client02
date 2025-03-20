import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../../Provider/AuthProvider';
import { MdShoppingCart } from 'react-icons/md';
import useCart from '../../../hooks/usecart';

const Navbar = () => {
    const { user, logOut } = useContext(authContext);
    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOption = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/menu" >Menu</NavLink>  </li>
        <li><NavLink to="/order" >Order Food</NavLink>  </li>
        <li><NavLink to="/secret" >Secret</NavLink>  </li>
        <li><NavLink to="/dashboard" >Dashboard</NavLink>  </li>
        {/* <li><NavLink to="/login" >LogIn</NavLink>  </li> */}
        <li><NavLink to="/signUp" >Sign Up</NavLink>  </li>

        <li><Link to='/dashboard/cart'>
            
                <button className="btn">
                <MdShoppingCart /><div className="badge badge-sm">+{user ? cart.length : 0}</div>
                </button>
    
           
        </Link> </li>

        {
            user ? <>
                {/* <span>{user ?.displayName}</span> */}
                <li><button onClick={handleLogOut} className='btn btn-ghost'>LogOut</button></li>
            </> : <>
                <li><NavLink to="/login" >LogIn</NavLink>  </li>
            </>
        }

        {/* <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "text-yellow-500"
            }
        >
            Home
        </NavLink> */}
        {/* <NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "text-yellow-500"
            }
        >
            Menu
        </NavLink> */}
        {/* <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>Item 3</a></li> */}
    </>
    return (
        <div>
            <div className="navbar opacity-60 fixed z-10 max-w-screen-xl text-white bg-black">
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
                            {navOption}
                        </ul>
                    </div>
                    <div>
                        <a className="text-xl">Bistro Boss</a>
                        <p className='tracking-widest'>Restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.displayName}
                </div>
            </div>
        </div>
    );
};

export default Navbar;