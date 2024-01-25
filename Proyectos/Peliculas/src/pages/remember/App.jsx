import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./components/react-router-dom-ejemplo/Inicio";
import Usuario from "./components/react-router-dom-ejemplo/Usuario";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import UsuarioDetalles from "./pages/UsuarioDetalles";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Inicio />,
        },
        {
          path: "/usuarios",
          element: <Usuario />,
        },
        {
          path: "/usuarios/:idU",
          element: <UsuarioDetalles />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
