import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
