import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      {/* barra de navegacion */}
      <MainNav />
      {/* Aqui irian todos los hijos */}
      <Outlet />
      {/* Aqui Iiria mi footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
