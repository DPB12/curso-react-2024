import { useEffect, useState } from "react";

const UseEffectBasic = () => {
  const [count, setCount] = useState(0);
  console.log("Use Effect Basic Rendered");

  //   useEffect(() => {
  //     console.log("Use Effect clg");
  //   });

  //   useEffect(() => {
  //     console.log("Use Effect clg");
  //   }, []);

  useEffect(() => {
    console.log("Use Effect clg");
  }, [count]);

  //Funciones
  function handleIncrementCount(val) {
    setCount((prev) => prev + val);
  }

  return (
    <>
      <div className="bg-gray-400 p-8 rounded-md text-center gap-3">
        <p className="text-2x1 font-bold mb-6"> Contador Nieto: {count}</p>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800 mx-3"
          onClick={() => handleIncrementCount(1)}
        >
          Incrementar
        </button>
      </div>
    </>
  );
};

export default UseEffectBasic;
