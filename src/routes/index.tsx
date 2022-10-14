import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../shared/components/error/Error";
import Home from "../features/landing/components/home/Home";
import Login from "../features/auth/components/login/Login";

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