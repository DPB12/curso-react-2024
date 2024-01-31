import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-5 flex justify-between font-sans">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo react" className="w-16 h-16 mx-4" />
        </Link>
        <span className="text-3xl font-bold">Api de peliculas</span>
      </div>
      <nav className="flex items-center">
        <ul className="flex space-x-10 mx-10 items-center">
          <li>Peliculas</li>
          <li>Acerca de</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
