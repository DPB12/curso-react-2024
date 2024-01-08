// Imports
import { useState } from "react";

//Variables Globales

const Contador = () => {
  // Variables Locales

  // Declaracion de hooks
  const [count, setCount] = useState(0);

  //Funciones
  function handleIncrementCount(val) {
    setCount((prev) => prev + val);
  }

  function handleDecrementCount() {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    // Lo que queramos renderizar.
    <>
      <h1>Ejemplo basico de contador</h1>
      <h2>{count}</h2>
      <button onClick={() => handleIncrementCount(8)}>Incrementar</button>
      <button onClick={handleDecrementCount}>Decrementar</button>
    </>
  );
};

export default Contador;
