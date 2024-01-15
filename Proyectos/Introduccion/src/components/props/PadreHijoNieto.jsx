import { useState } from "react";

const Nieto = (props) => {
  const { count, handleIncrementCount, handleDecrementCount } = props;

  return (
    <>
      <div className="bg-gray-400 p-8 rounded-md text-center gap-3"></div>
      <p className="text-2x1 font-bold mb-6"> Contador Nieto: {count}</p>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800 mx-3"
        onClick={() => handleIncrementCount()}
      >
        Incrementar
      </button>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800 mx-3"
        onClick={() => handleDecrementCount()}
      >
        Decrementar
      </button>
    </>
  );
};
const Hijo = (props) => {
  const { count, handleIncrementCount, handleDecrementCount } = props;

  return (
    <>
      <div className="bg-gray-400 p-8 rounded-md text-center gap-3">
        <p className="text-2x1 font-bold mb-6"> Contador Hijo: {count}</p>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800 mx-3"
          onClick={() => handleIncrementCount()}
        >
          Incrementar
        </button>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800 mx-3"
          onClick={() => handleDecrementCount()}
        >
          Decrementar
        </button>
      </div>
      <Nieto
        count={count}
        handleIncrementCount={() => handleIncrementCount(1)}
        handleDecrementCount={handleDecrementCount}
      />
    </>
  );
};
const PadreHijoNieto = () => {
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
    <>
      <div className="bg-gray-400 p-8 rounded-md text-center gap-3">
        <p className="text-2x1 font-bold mb-6"> Contador Padre: {count}</p>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800 mx-3"
          onClick={() => handleIncrementCount(1)}
        >
          Incrementar
        </button>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800 mx-3"
          onClick={() => handleDecrementCount()}
        >
          Decrementar
        </button>
        <Hijo
          count={count}
          handleIncrementCount={() => handleIncrementCount(30)}
          handleDecrementCount={handleDecrementCount}
        />
      </div>
    </>
  );
};

export default PadreHijoNieto;
