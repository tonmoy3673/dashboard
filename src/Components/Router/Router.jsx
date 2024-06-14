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
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/books",
        element: <Books />,
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
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
        loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`)
      },
      
      {
        path: "/dashboard/add-products",
        element: <PrivateRoute><AddProducts/></PrivateRoute>
      }
    ],
  },
]);
