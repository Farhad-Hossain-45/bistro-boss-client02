import React, { useContext } from 'react';
import { authContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/usecart';

const OrderItem = ({ item }) => {
    const { name, recipe, image, price, _id} = item
    const {user} = useContext(authContext);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const handleAddToCart = (food) =>{
        if(user && user.email){
            const menuItem = {
                menuId: _id,
                email: user.email,
                name,
                recipe,
                image,
                price 

            }
            axiosSecure.post('/carts' , menuItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} added to cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

               refetch()
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "please login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state:{from:location}})
                }
              });
        }

    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img className='h-[200px] w-full'
                    src={image}
                    alt="image" />
            </figure>
            <p className='absolute bg-black text-white right-0 mr-4 mt-4 py-2 px-3 rounded-md'>${price}</p>
            <div className="card-body">
                <h2 className="text-2xl text-black text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-gray-100 text-yellow-500 uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;