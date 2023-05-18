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
          element: <AllToys></AllToys>
        },
        {
          path: "my-toys",
          element: <MyToys></MyToys>
        },
        {
          path: "add-toys",
          element: <AddAToy></AddAToy>
        },

      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  export default router