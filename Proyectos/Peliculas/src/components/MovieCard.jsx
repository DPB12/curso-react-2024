import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  let navigate = useNavigate();

  function handleClickDetails() {
    navigate(`peliculas/${id}`);
  }
  return (
    <>
      <div
        className="w-60 h-100 bg-gray-800 p-3 flex flex-col gap-4 rounded-br-3xl justify-between
   hover:shadow-2xl hover:gb-black transition-all duration-500"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-48 object-cover mb-4 rounded-md mx-auto"
        />
        <div className="flex flex-col gap-4">
          <span className=" text-xl text-gray-50 font-bold mx-1">{title}</span>

          <p className="text-xs text-gray-300">Id: {id}</p>
        </div>
        <span className="font-bold text-red-600">{vote_average}</span>
        <button
          className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2
        rounded-br-xl"
          onClick={handleClickDetails}
        >
          Detalles
        </button>
      </div>
    </>
  );
};

export default MovieCard;
