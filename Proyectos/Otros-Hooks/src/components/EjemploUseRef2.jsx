import { useRef } from "react";
import { useState } from "react";

const EjemploUseRef2 = () => {
  const [name, setName] = useState("");
  const inputName = useRef(null);

  function handleFocus() {
    if (inputName.current) {
      inputName.current.focus();
    }
  }
  return (
    <div>
      <label htmlFor="">
        Nombre:
        <input
          type="text"
          id="name"
          value={name}
          ref={inputName}
          onKeyUp={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={handleFocus}>Cambiar foco</button>
    </div>
  );
};

export default EjemploUseRef2;
