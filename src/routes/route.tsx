import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../shared/components/error/Error";
import Home from "../features/landing/components/home/Home";
import Login from "../features/auth/components/login/Login";
import ProductDetail from "../features/landing/components/productDetail/ProductDetail";
import { Layout } from "../shared/components/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
