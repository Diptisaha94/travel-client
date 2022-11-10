import { createBrowserRouter } from "react-router-dom";
import AddService from "./componets/AddService";
import Blog from "./componets/Blog";
import Home from "./componets/Home";
import Login from "./componets/Login";
import Myreview from "./componets/Myreview";
import PrivateRoute from "./componets/Privateroute";
import Services from "./componets/Services";
import ServicesDetails from "./componets/ServicesDetails";
import Signup from "./componets/Signup";
import Update from "./componets/Update";
import Main from "./Layout/Main";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=> fetch('https://travel-server-eta.vercel.app/service')  
        },
        {
          path:"/home",
          element:<Home></Home>,
          loader: ()=> fetch('https://travel-server-eta.vercel.app/service')
        },
        {
          path:"/services",
          element:<Services></Services>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/myreview",
          element:<PrivateRoute><Myreview></Myreview></PrivateRoute>
        },
        {
          path:"/public",
          element:<Blog></Blog>
        },
        {
          path:"/addservice",
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path:"/update/:id",
          element:<Update></Update>,
          loader: ({params})=> fetch(`https://travel-server-eta.vercel.app/update/${params.id}`)
        },
        {
          path:"/services/:id",
          element:<ServicesDetails></ServicesDetails>,
          loader: ({params})=> fetch(`https://travel-server-eta.vercel.app/services/${params.id}`)
        }
      ]
    },
  ]);