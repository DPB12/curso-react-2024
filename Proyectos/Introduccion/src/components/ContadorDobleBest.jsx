import { useState } from "react";

const initialState = {
  daulin: 0,
  pepe: 0,
};

const ContadorDobleBest = () => {
  // Hooks
  const [firends, setFirends] = useState(initialState);

  // Variables locales

  // Funciones
  function handleIncrement(friend) {
    setFirends((prev) => ({
      ...firends,
      [friend]: prev[friend] + 1,
    }));
  }

  return (
    <>
      <div>
        <span>
          Daulin tiene <strong>{firends.daulin}</strong> amigos.
        </span>
        <button onClick={() => handleIncrement("daulin")}>Seguir</button>
      </div>

      <div>
        <span>
          Pepe tiene <strong>{firends.pepe}</strong> amigos.
        </span>
        <button onClick={() => handleIncrement("pepe")}>Seguir</button>
      </div>
    </>
  );
};

export default ContadorDobleBest;
