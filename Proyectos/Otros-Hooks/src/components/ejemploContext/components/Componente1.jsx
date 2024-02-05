import { useContext } from "react";
import Componente2 from "./Componente2";

const Componente1 = () => {
  const { appState, setAppState } = useContext();
  return (
    <>
      <p>Soy el componente 1</p>
      <div>Contador: {appState.cont}</div>
      <Componente2 />
    </>
  );
};

export default Componente1;
