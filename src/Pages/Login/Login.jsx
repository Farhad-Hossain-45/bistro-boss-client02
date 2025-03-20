import React, { useContext, useEffect, useState } from 'react';
import { useReducer } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { authContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
const Login = () => {
    
    const [disable, setDisable] = useState(true)
    const {singIn} = useContext(authContext)
    const location = useLocation()
    const navigate = useNavigate()
    const  fromNavigate = location.state?.from?.pathname || "/";
    
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    
    const handleLogin = event =>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        // console.log(email,  password)
        singIn(email,password)
        .then(result =>{
            const user = result.user;
            // console.log(user)
            Swal.fire({
                title: "Login successful",
                icon: "success",
                draggable: true
              });
              navigate(fromNavigate, { replace: true });
        });
        
    }
    const handleVerify = (e)=>{
        const user_captcha_value = e.target.value;
        // console.log(captchaValue);
        if (validateCaptcha(user_captcha_value)==true) {
            setDisable(false);
        }
   
        else {
            // alert('Captcha Does Not Match');
        }
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content md:flex-row flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <LoadCanvasTemplate />
                                </label>
                                <input type="captcha" onBlur={handleVerify} name='captcha' placeholder="type the captcha" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disable} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center'><small>New Here?<Link to={'/signUp'}>Create a New Account</Link></small></p>
                    <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;