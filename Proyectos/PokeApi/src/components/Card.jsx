import { useState } from "react";

const Card = ({ pokemon, handleDelete, selectDelete, handleSelectDelete }) => {
  const [isDelete, setIsDelete] = useState(false);

  function handleClickDelete() {
    setIsDelete(true);
    setTimeout(() => {
      handleDelete(pokemon.id);
    }, 500);
  }

  return (
    <div
      className={`max-w-xs rounded overflow-hidden shadow-md bg-white m-4 flex flex-col justify-center items-center transform ${
        isDelete ? "rotateY-180 scale-0" : "rotateY-0 scale-100"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className="flex flex-col w-full">
        <input
          className={`${selectDelete ? "block" : "hidden"}`}
          type="checkbox"
          name={pokemon.name}
          id={pokemon.id}
          onClick={(e) => handleSelectDelete(e, pokemon.id)}
        />
        <img
          src={pokemon.img}
          alt={pokemon.name}
          className="w-24 h-24 mx-auto mt-4"
        />
        <div className="p-4 ">
          <h2 className="text-x1 font-bold">{pokemon.name}</h2>
          <p>{pokemon.media}</p>
        </div>
        <div className="mx-auto mb-4">
          <button
            onClick={handleClickDelete}
            className="bg-red-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-red-500"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
