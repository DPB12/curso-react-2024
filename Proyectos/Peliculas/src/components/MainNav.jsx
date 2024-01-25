import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <header className="bg-blue-200">
      <nav>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/usuarios"}>Usuarios</Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
