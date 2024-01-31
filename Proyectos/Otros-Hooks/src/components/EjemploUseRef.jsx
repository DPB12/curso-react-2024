import { useEffect } from "react";
import { useRef } from "react";

const EjemploUseRef = () => {
  const inputName = useRef();

  useEffect(() => {
    inputName.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="">
        Name:
        <input type="text" ref={inputName} />
      </label>
    </div>
  );
};

export default EjemploUseRef;
