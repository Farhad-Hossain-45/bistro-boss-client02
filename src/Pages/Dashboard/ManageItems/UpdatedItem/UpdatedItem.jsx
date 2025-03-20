import React from 'react';
import DashboardSectionTitle from '../../../../Components/DashboardSectionTitle/DashboardSectionTitle';
import { useLoaderData } from 'react-router-dom';

import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdatedItem = () => {
const {name, recipe, category, _id, price} = useLoaderData()
console.log(name)
    

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imagebb and then get an url
        const imageFile = { image: data.image[0] }
        console.log(imageFile)
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        });
        if (res.data.success) {
            const menuItemInfo = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }
            const menuRes = await axiosSecure.post('/menu', menuItemInfo)
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name}is added in the menu `,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }

        // console.log(res.data)

    }


    return (
        <div>
            <DashboardSectionTitle subHeading={'--- Refresh info ---'} heading={'update ana item'}>

            </DashboardSectionTitle>
            <div className='my-6 bg-gray-200 p-10'>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>

                        </label>
                        <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />

                    </div>
                    <div className=' flex gap-5 mt-4'>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value='default'>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className='form-control w-full'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Price*</span>

                                </label>
                                <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />

                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>

                        </label>
                        <textarea defaultValue={recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                        <label className="label">

                        </label>
                    </div>
                    <div>
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className='btn mt-2 bg-orange-500 text-white'>Update Item </button>
                </form>
            </div>

        </div>
    );
};

export default UpdatedItem;