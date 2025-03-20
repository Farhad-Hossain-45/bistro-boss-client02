
import { useQuery } from '@tanstack/react-query';
import DashboardSectionTitle from '../../../Components/DashboardSectionTitle/DashboardSectionTitle';

import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { IoIosPeople } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
// import useCart from '../../../hooks/usecart';

const AllUsers = () => {
    // const {user} = useContext(authContext);
    // console.log(user)
    // const [, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const { data: user = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
   
    const handleMakeRole = (item)=>{
        axiosSecure.patch(`/users/admin/${item._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        
    }
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
                axiosSecure.delete(`/users/${id}`)
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
            <div>
                <DashboardSectionTitle subHeading={'---How many?---'} heading={'MANAGE ALL USERS'}>

                </DashboardSectionTitle>
            </div>
            <div>
                <p className=' text-2xl font-black my-3'>Total User : {user.length} </p>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-orange-500 text-white'>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                user.map((item, index)=><tr key={item._id}>
                                    <th>
                                        {index +1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                                
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        
                                        
                                        <span className="badge badge-ghost badge-sm">{item.email}</span>
                                    </td>
                                    <td className='text-black'>
                                       { item.role === "admin" ? "Admin" : <button onClick={()=>handleMakeRole(item)} className='btn bg-orange-400 btn-sm'><IoIosPeople className=' text-white text-2xl' /></button>}
                                        </td>
                                    <th>
                                        <button onClick={()=>handleDelete(item._id)} className="text-white btn btn-ghost btn-xs text-xl bg-red-500"><MdDelete /></button>
                                    </th>
                                </tr> )
                            }
                            
                            
                             
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;