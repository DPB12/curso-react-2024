import { useState } from "react";

const AddProductForm = () => {
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState(0);
  const [descipcion, setDescipcion] = useState("");
  const [urlimg, setUrlimg] = useState(second);
  return (
    <div className="w-1/2 mx-auto mt-8">
      <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-3xl font-semibold my-4">Añadir nuevo producto</h2>
        <div className="mb-4">
          <label htmlFor="" className="text-gray-700 text-sm font-bold mb-2">
            Nombre del rpoducto
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="stock"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Stock del producto.
          </label>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Descripcion del producto.
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            value={descipcion}
            onChange={(e) => setDescipcion(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="urlimg"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Imagen del producto.
          </label>
          <img
            src={}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
