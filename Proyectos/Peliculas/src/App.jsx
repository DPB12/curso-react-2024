import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootMoviesLayout from "./pages/RootMoviesLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage ";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <RootMoviesLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/peliculas/:idU",
          element: <MovieDetailsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
