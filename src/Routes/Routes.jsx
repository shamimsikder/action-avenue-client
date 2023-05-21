import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [

        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "signup",
          element: <SignUp></SignUp>
        },
        {
          path: "blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "all-toys",
          element: <AllToys></AllToys>,
          loader: () => fetch('https://action-avenue-server.vercel.app/all-toys')
        },
        {
          path: "my-toys",
          element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },
        {
          path: "add-toys",
          element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
        },
        {
          path: "/view-details/:id",
          element: <PrivateRoutes> <ViewDetails></ViewDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://action-avenue-server.vercel.app/toy/${params.id}`)
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  export default router