import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootMoviesLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>aquí Footer</div>
    </>
  );
};

export default RootMoviesLayout;
