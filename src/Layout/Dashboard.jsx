import React from 'react';
import { FaBook, FaCalendar, FaCalendarCheck, FaHome, FaShoppingCart, FaUtensils } from 'react-icons/fa';
import { MdOutlinePayment, MdReviews } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/usecart';
import { IoIosMenu, IoIosPeople } from 'react-icons/io';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin()
    return (
        <div className='flex'>
            <div className='md:w-72 w-44 min-h-screen bg-orange-500'>
                <div className='mt-4 mb-10'>
                    <p className='text-center mb-2 text-4xl text-black uppercase'>Bistro boss</p>
                    <p className='text-center text-xl text-black uppercase tracking-[.25em]'>Restaurant</p>
                </div>
                <ul className='menu '>
                    {
                        isAdmin ? <>
                            <li className='mb-2'>
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>Admin Home</NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to='/dashboard/addItems'>
                                    <FaUtensils /> Add Items</NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to='/dashboard/manageItems'>
                                    <IoIosMenu /> Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageBookings'>
                                       <FaBook></FaBook> Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allUsers'>
                                    <IoIosPeople /> All Users</NavLink>
                                </li>
                                
                        </> :
                            <>
                                <li className='mb-2'>
                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>User Home</NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to='/dashboard/reservation'>
                                        <FaCalendar></FaCalendar> Reservation</NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to='/dashboard/payment'>
                                        <MdOutlinePayment /> Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <MdReviews /> Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/booking'>
                                        <FaCalendarCheck /> My Booking</NavLink>
                                </li>
                            </>
                    }

                </ul>
                <p className='border border-b-1 w-64 mx-auto mt-10'></p>
                <div className='mt-5'>
                    <ul className=' menu'>
                        <li>
                            <NavLink to='/'>
                                <FaHome /> Home</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='flex-1 md:p-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;