import React from 'react';
import useCart from '../../../hooks/usecart';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';




const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    // console.log(cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    if(res.data.deleteCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                    refetch()
                })
                
            }
        });
    }
    return (
        <div>
            <div className='md:w-4/12 mt-10 mx-auto text-center'>
                <p className=' text-yellow-500 text-2xl italic mb-4'>----My Cart----</p>
                <p className='uppercase text-3xl border-y-4 py-4'>WANNA ADD MORE?</p>
            </div>
            <div>
                <div className='mt-10 text-4xl text-black md:flex justify-evenly bg-gray-300 mb-10'>
                    <p>Total Order : {cart.length}</p>
                    <p>Total Order : ${totalPrice}</p>
                    <button className='btn bg-orange-500 text-white'>Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-orange-500 text-white'>
                                <th>#</th>
                                <th>
                                    Item Image
                                </th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="text-white btn btn-ghost btn-xs text-xl bg-red-500"><MdDelete /></button>
                                    </th>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;