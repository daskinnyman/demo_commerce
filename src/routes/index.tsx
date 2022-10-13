import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);