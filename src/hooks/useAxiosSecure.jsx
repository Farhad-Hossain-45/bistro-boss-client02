import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';


const axiosSecure = axios.create({
    
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(authContext)
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('access-token')
        console.log( 'request stopped by interceptors', token)
        config.headers.authorization = (`Bearer ${token}`)
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
axiosSecure.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, async(error)=> {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error.response.status;
    // console.log('status error in the interceptor', status)
    if(status === 401 || status === 403){
      await logOut()
            
        navigate('/login')

    }
    return Promise.reject(error);
  });

    return axiosSecure;
};

export default useAxiosSecure;