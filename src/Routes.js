import { createBrowserRouter } from "react-router-dom";
import Home from "./componets/Home";
import Services from "./componets/Services";
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
        }
      ]
    },
  ]);