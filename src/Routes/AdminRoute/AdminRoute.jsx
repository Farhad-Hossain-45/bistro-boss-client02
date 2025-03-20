import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    // console.log(user)

    if (loading || isAdminLoading) {
        return <progress className="progress w-56 mx-auto"></progress>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />
};

export default AdminRoute;