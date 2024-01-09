import Buscador from "./components/Buscador";
import Contador from "./components/Contador";
import RegistrarForm from "./components/RegistrarForm";

const Inicio = () => {
  return (
    <>
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
