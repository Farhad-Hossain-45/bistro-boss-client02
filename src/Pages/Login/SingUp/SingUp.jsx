import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';

const SingUp = () => {
    const navigate = useNavigate()
    const {register,reset,handleSubmit,formState: { errors },} = useForm()
    const {createUser, updateUserProfile}= useContext(authContext)
    const axiosPublic = useAxiosPublic()
    const onSubmit = (data) => {
      console.log(data)
      createUser(data.email, data.password)
      .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
        updateUserProfile(data.name, data.photoURL)
        .then(()=>{
            // console.log('user profile info update')
            const userInfo = {
                name: data.name,
                email: data.email
            }

            axiosPublic.post('/users', userInfo)
            .then(res=>{
                if(res.data.insertedId){
                    console.log('user added a database')
                    
                    reset()
                    Swal.fire({
                        title: "Sign Up Successful",
                        icon: "success",
                        draggable: true
                      });
                      navigate('/')
                }
            })
        })
        .catch(error=>console.log(error))

        
      })
      
    }
   
    //   console.log(watch("example"))
    // const {createUser}= useContext(authContext)
    // const handleSubmit = (event)=>{
    //     event.preventDefault();
    //     const from = event.target;
    //     const name = from.name.value;
    //     const email = from.email.value;
    //     const password = from.password.value;
    //     // console.log(name,email, password)
    //  createUser(email, password)
    //  .than(result =>{
    //     const user = result.user;
    //     console.log(user)
    //  })

    // }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content md:flex-row flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name",{ required: true })} placeholder="type your name" className="input input-bordered" required />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" {...register("photoURL",{ required: true })} placeholder="type photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email",{ required: true })} placeholder="email" className="input input-bordered" required />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",{ required: true })} placeholder="password" className="input input-bordered" required />
                                {errors.password && <span>This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p className='text-center'><small>Already registered? <Link to={'/login'}>Go to log in</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;