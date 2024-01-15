// Imports

//Variables Globales

const Contador = () => {
  // Variables Locales
  const nombre = "Daulin";
  const nCalle = 36;
  const miArray = ["baba", "bebe", "lala"];
  const miObjeto = {
    nombre: "Pepe",
    edad: 25,
    direccion: "calle 10",
  };

  // Declaracion de hooks

  //

  return (
    <div>
      <h1>
        Mi nombre es {nombre} y vivo en la calle {nCalle}
      </h1>

      <p>Suma para prueba 20 + 30 = {20 + 30}</p>

      <ul>
        {miArray.map((fruta, indice) => (
          <li key={indice}>
            {fruta} y su indice es {indice}
          </li>
        ))}
      </ul>

      <p>Nombre : {miObjeto.nombre}</p>
      <p>Edad : {miObjeto.edad}</p>
    </div>
  );
};

export default Contador;
