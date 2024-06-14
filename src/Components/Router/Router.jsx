import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../HomePage/Home";

import MainLayout from "../Layout/MainLayout";
import BookDetails from "../Pages/Books/BookDetails";
import Books from "../Pages/Books/Books";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminLayout from "../Layout/AdminLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
    element: <AdminLayout/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/books",
        element: 
      },
      {
        path: "/dashboard/book/add",
        element: 
      }
    ],
  },
]);
