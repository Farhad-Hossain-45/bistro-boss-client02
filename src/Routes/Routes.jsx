import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp/SingUp";


import PrivetRoute from "./PrivetRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import Booking from "../Pages/Dashboard/Booking/Booking";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import AdminRoute from "./AdminRoute/AdminRoute";
import UpdatedItem from "../Pages/Dashboard/ManageItems/UpdatedItem/UpdatedItem";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "order",
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SingUp></SingUp>
      },
      {
        path: 'secret',
        element: <PrivetRoute><Secret></Secret></PrivetRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children:[
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      },
      {
        path: '/dashboard/userHome',
        element: <UserHome></UserHome>
      },
      {
        path: '/dashboard/reservation',
        element: <Reservation></Reservation>
      },
      {
        path: '/dashboard/payment',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/review',
        element: <AddReview></AddReview>
      },
      {
        path: '/dashboard/booking',
        element: <Booking></Booking>
      },
      // admin route
      {
        path: '/dashboard/allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: '/dashboard/addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      
      {
        path: '/dashboard/manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: '/dashboard/updateItem/:id',
        element: <AdminRoute><UpdatedItem></UpdatedItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`),
        
      },
      {
        path: '/dashboard/manageBookings',
        element: <ManageBookings></ManageBookings>
      },
     
    ]
  }
  
]);