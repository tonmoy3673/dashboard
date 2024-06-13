import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../HomePage/Home";

import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export  const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch('http://localhost:5000/books')
            },
            {
                path:'/home',
                element:<Home/>,
                loader:()=>fetch('http://localhost:5000/books')

            },
            {
                path:'/books',
                element:<Books/>,
                loader:()=>fetch('http://localhost:5000/books')

            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            }
        ]
    }
])