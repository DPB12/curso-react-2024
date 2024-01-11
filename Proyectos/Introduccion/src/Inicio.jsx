import Buscador from "./components/Buscador";
import Contador from "./components/Contador";
import ContadorDoble from "./components/ContadorDoble";
import ContadorDobleBest from "./components/ContadorDobleBest";
import DarkLightMode from "./components/DarkLightMode";
import RegistrarForm from "./components/RegistrarForm";
import ToDoListBasic from "./components/ToDoListBasic";
import ToDoListBasicTailWindCss from "./components/ToDoListBasicTailWindCss";

const Inicio = () => {
  return (
    <>
      <ToDoListBasicTailWindCss />
      <br />
      <br />
      <ToDoListBasic />
      <br />
      <br />
      <DarkLightMode />
      <br />
      <br />
      <ContadorDobleBest />
      <br />
      <br />
      <ContadorDoble />
      <br />
      <br />
      <Buscador />
      <br />
      <br />
      <RegistrarForm />
      <br />
      <br />
      <Contador />
    </>
  );
};

export default Inicio;
