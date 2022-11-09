import { createBrowserRouter } from "react-router-dom";
import Home from "./componets/Home";
import Login from "./componets/Login";
import Myreview from "./componets/Myreview";
import Services from "./componets/Services";
import ServicesDetails from "./componets/ServicesDetails";
import Signup from "./componets/Signup";
import Main from "./Layout/Main";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=> fetch('http://localhost:5000/service')  
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
          element:<Myreview></Myreview>
        },
        {
          path:"/services/:id",
          element:<ServicesDetails></ServicesDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);