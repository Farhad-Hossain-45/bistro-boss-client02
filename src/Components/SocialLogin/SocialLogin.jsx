import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { authContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(authContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const locationNavigate = location.state?.from?.pathname || "/";
    const handleSocialLogin = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            const loginInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', loginInfo)
            .then(res=>{
                console.log(res.data)
                navigate(locationNavigate, { replace: true });
            })
        })
    }
    return (
        <div className=''>
            <button onClick={handleSocialLogin} className='btn btn-outline'><FaGoogle>
                </FaGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;