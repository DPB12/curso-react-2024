import useDataApi from "../hooks/useDataApi";
const Home = () => {
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const apiEndPoint = `https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&apikey=${apiToken}`;

  const { data, error, loading } = useDataApi(apiEndPoint);
  return <></>;
};

export default Home;
