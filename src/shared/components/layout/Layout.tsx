import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Box minH={"calc(100vh - 48px)"}>
      <Outlet></Outlet>
      </Box >
      <Footer></Footer>
    </>
  );
};
