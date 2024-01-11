import "./DarkLightMode.css";
import { useState } from "react";

const DarkLightMode = () => {
  // Hooks
  const [darkMode, setDarkMode] = useState(false);

  // Funciones

  function handleToggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`default ${darkMode ? "dark" : "light"}`}>
      <button onClick={handleToggleTheme}>
        {darkMode ? "modoClaro" : "modoOscuro"}
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sit
        quas officia quae illo consequuntur facilis, repudiandae sed in ratione
        exercitationem eaque fugiat quisquam, asperiores culpa? Eligendi totam
        nulla ab?
      </p>
    </div>
  );
};
export default DarkLightMode;
