import React from 'react';
import DashboardSectionTitle from '../../../Components/DashboardSectionTitle/DashboardSectionTitle';
import useMenu from '../../../hooks/useMenu';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const axiosSecure = useAxiosSecure()
    const [menu, ,refetch] = useMenu()
   const handleDelete = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async (result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${id}`)
            console.log(res.data)
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
            }
        }
      });
   }

    return (
        <div>

            <DashboardSectionTitle subHeading={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'}>

            </DashboardSectionTitle>
            <div>
                <p className=' text-2xl font-black my-3'>Total Items : {menu.length} </p>
            </div>
            <div className='mt-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-orange-400 text-white'>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* row 1 */}
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
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

                                        <p>{item.name}</p>
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                       <Link to={`/dashboard/updateItem/${item._id}`}> <button className="text-white btn btn-ghost btn-sm bg-orange-400"><FaEdit className='text-2xl' /></button></Link>
                                    </th>
                                    <th>
                                        <button onClick={()=>handleDelete(item._id)} className="text-white btn btn-ghost btn-xs text-xl bg-red-500"><MdDelete /></button>
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

export default ManageItems;