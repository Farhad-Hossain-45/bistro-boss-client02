import React, { useContext } from 'react';


import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation()
    // console.log(user)

    if(loading){
        return <progress className="progress w-56 mx-auto"></progress>
    }
    if(user){
        return children;
    }
   return <Navigate to="/login" state={{ from: location }} replace  />
       
    
    
};

export default PrivetRoute;