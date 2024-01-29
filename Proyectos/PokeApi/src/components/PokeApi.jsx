import { useEffect, useState } from "react";
import fetchPokeApi from "../api/pokeApi";
import Spinner from "../../../Peliculas/src/components/Spinner";
import Card from "./Card";
import Footer from "./Footer";
import MainNav from "./MainNav";
const URL = import.meta.env.VITE_API_URL;

const PokeApi = () => {
  const [pokemons, setPokemons] = useState([]);
  const [deleteAll, setDeleteAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectDelete, setSelectDelete] = useState(false);

  function handleDelete(id) {
    const updatePoke = pokemons.filter((poke) => poke.id !== id);
    setPokemons(updatePoke);
  }

  function handleSelectDelete(e, id) {
    if (e.target.checked === true) {
      setDeleteAll([...deleteAll, id]);
    } else {
      setDeleteAll(deleteAll.filter((item) => item !== id));
    }
  }

  function handleDeleteAll() {
    if (deleteAll.length <= 0) {
      console.log("No has seleccionado ninguna");
      return;
    }

    let copyPoke = pokemons;

    deleteAll.map((pokemonId) => {
      copyPoke = copyPoke.filter(
        (pokemonOriginal) => pokemonOriginal.id !== pokemonId
      );
    });

    // deleteAll.map((id) => {
    //   pokemons.map((poke, ind) => {
    //     if (poke.id == id) {
    //       copyPoke.splice(ind, 1);
    //     }
    //   });
    // });
    // ------------------ El indice en los maps acuerdate que varian y que por eso puede fallarrr ----------- //
    // pokemons.map((poke, ind) => {
    //   deleteAll.map((id) => {
    //     if (poke.id === id) {
    //       copyPoke.splice(ind, 1);
    //     }
    //   });
    // });

    setPokemons(copyPoke);
    setSelectDelete(!selectDelete);
    setDeleteAll([]);
  }

  function handleSearchPokemon(e) {
    const result = e.target.value;
    let copyPoke = pokemons.filter((poke) =>
      poke.name.includes(result.trim().toLowerCase())
    );

    if (copyPoke.length > 0) {
      setPokemons(copyPoke);
    } else {
      setPokemons(pokemons);
    }
  }

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPokeApi(URL);
      1;

      const pokemonsData = await Promise.all(
        data.map(async (poke) => {
          const resp = await fetch(poke.url);
          const pokeDetails = await resp.json();

          return {
            id: pokeDetails.id,
            name: pokeDetails.name,
            img:
              pokeDetails.sprites.other.dream_world.front_default ||
              pokeDetails.sprites.front_default ||
              "",
            media: pokeDetails.weight,
          };
        })
      );

      setPokemons(pokemonsData);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <div className="w-screen flex flex-wrap justify-center z-40 my-4">
        <MainNav handleSearchPokemon={handleSearchPokemon} />
      </div>

      <div className="flex flex-wrap justify-center mx-auto mt-10">
        <div className="flex flex-col justify-center items-center">
          <input
            className="bg-blue-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-blue-700"
            type="button"
            value="Seleccionar"
            onClick={() => setSelectDelete(!selectDelete)}
          />
          <br />
          <input
            className={`bg-red-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-red-700 ${
              selectDelete ? "block" : "hidden"
            }`}
            type="button"
            value="Borrar todos"
            onClick={handleDeleteAll}
          />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          pokemons.map((poke) => (
            <Card
              key={poke.id}
              pokemon={poke}
              handleDelete={handleDelete}
              selectDelete={selectDelete}
              handleSelectDelete={handleSelectDelete}
            />
          ))
        )}
      </div>

      <Footer />
    </>
  );
};

export default PokeApi;
