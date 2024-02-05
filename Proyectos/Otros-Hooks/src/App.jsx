import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EjemploUseRef from "./components/EjemploUseRef";
import EjemploUseRef2 from "./components/EjemploUseRef2";
import EjemploUseRef3 from "./components/EjemploUseRef3";
import EjemploUseContext from "./components/EjemploUseContext";
import Componente1 from "./components/ejemploContext/components/Componente1";
import Componente4 from "./components/ejemploContext/components/Componente4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <hr />
      <h1>Use ref</h1>
      <EjemploUseRef />
      <EjemploUseRef2 />
      <EjemploUseRef3 />
      <hr />
      <h1>Use Context</h1>
      <Componente1 />
      <Componente4 />
    </>
  );
}

export default App;
