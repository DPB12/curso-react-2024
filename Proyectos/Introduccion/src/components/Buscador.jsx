import { useState } from "react";

const initialState = ["manzana", "pera", "naranja", "platano", "melon", "uva"];

// Estado inicial que guarde el initialState

const Buscador = () => {
  const [searchItems, setSearchItems] = useState(initialState);
  // const [filteredItems, setFilteredItems] = useState(initialState);

  let search = [];

  function handleSearch(event) {
    event.preventDefault();
    search = initialState.filter((fruta) =>
      fruta.toLowerCase().includes(event.target.value.toLowerCase())
    );

    if (search.length > 0) {
      setSearchItems(search);
    } else {
      setSearchItems(initialState);
    }
  }

  return (
    /**
     * Ul con los componentes del array y sobreescribir cuando lo busquemos
     */
    <>
      <input type="text" onKeyUp={handleSearch} />
      <ul>
        {searchItems.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </>
  );
};

export default Buscador;
