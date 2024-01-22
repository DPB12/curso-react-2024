import { useEffect, useState } from "react";
import fetchPokeApi from "../api/pokeApi";
import Spinner from "../../../Peliculas/src/components/Spinner";
import Card from "./Card";
const URL = import.meta.env.VITE_API_URL;

const PokeApi = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleDelete(id) {
    const updatePoke = pokemons.filter((poke) => poke.id !== id);
    setPokemons(updatePoke);
  }

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPokeApi(URL);
      console.log(data);

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
      console.log(pokemons);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mx-auto">
      {loading ? (
        <Spinner />
      ) : (
        pokemons.map((poke) => (
          <Card key={poke.id} pokemon={poke} handleDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default PokeApi;
