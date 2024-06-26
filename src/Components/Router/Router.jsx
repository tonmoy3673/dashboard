import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../HomePage/Home";

import AdminLayout from "../Layout/AdminLayout";
import MainLayout from "../Layout/MainLayout";
import BookDetails from "../Pages/Books/BookDetails";
import Books from "../Pages/Books/Books";
import AddProducts from "../Pages/Dashboard/AddProducts";
import AllProducts from "../Pages/Dashboard/AllProducts";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Orders from "../Pages/Dashboard/Orders";
import UpdateProducts from "../Pages/Dashboard/UpdateProducts";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://dashboard-server-ten.vercel.app/books"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("https://dashboard-server-ten.vercel.app/books"),
      },
      {
        path: "/books",
        element: <Books />,
        loader: () => fetch("https://dashboard-server-ten.vercel.app/books"),
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://dashboard-server-ten.vercel.app/books/${params.id}`),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><AdminLayout/></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path:'/dashboard/books',
        element:<PrivateRoute><AllProducts/></PrivateRoute>
      },
      {
        path:'/dashboard/update/:id',
        element:<PrivateRoute><UpdateProducts/></PrivateRoute>,
        loader:({params})=>fetch(`https://dashboard-server-ten.vercel.app/books/${params.id}`)
      },
      {
        path:'/dashboard/orders',
        element:<PrivateRoute><Orders/></PrivateRoute>,
        

      },

      
      {
        path: "/dashboard/add-products",
        element: <PrivateRoute><AddProducts/></PrivateRoute>
      }
    ],
  },
]);
