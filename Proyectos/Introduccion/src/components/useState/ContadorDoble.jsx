import { useState } from "react";

const initialState = {
  daulin: 0,
  pepe: 0,
};

const ContadorDoble = () => {
  // Hooks
  const [firends, setFirends] = useState(initialState);

  // Variables locales

  // Funciones
  function handleIncrementDaulin() {
    setFirends({
      ...firends,
      daulin: firends.daulin + 1,
    });
  }

  function handleIncrementPepe() {
    setFirends({
      ...firends,
      pepe: firends.pepe + 1,
    });
  }

  return (
    <>
      <div>
        <span>
          Daulin tiene <strong>{firends.daulin}</strong> amigos.
        </span>
        <button onClick={handleIncrementDaulin}>Seguir</button>
      </div>

      <div>
        <span>
          Pepe tiene <strong>{firends.pepe}</strong> amigos.
        </span>
        <button onClick={handleIncrementPepe}>Seguir</button>
      </div>
    </>
  );
};

export default ContadorDoble;
