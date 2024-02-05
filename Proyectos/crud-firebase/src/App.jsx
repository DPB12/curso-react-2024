import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditProductPage from "./pages/EditProductPage";
import PaymentPage from "./pages/PaymentPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/productos/:idPro",
      element: <EditProductPage />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router}/>;
}

export default App;
