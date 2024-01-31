import { useRef } from "react";
import { useState } from "react";

const EjemploUseRef3 = () => {
  const [counter, setCounter] = useState(0);
  const btnRef = useRef();

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>Contador : {counter}</p>
      <button ref={btnRef} onClick={handleClick}></button>
    </div>
  );
};

export default EjemploUseRef3;
