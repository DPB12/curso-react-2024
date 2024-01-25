import { useParams } from "react-router-dom";

const UsuarioDetalles = () => {
  const { idU } = useParams();
  return (
    <>
      <div className="text-3x1 font-bold">UsuarioDetalles</div>
      <p>El id es: {idU}</p>
    </>
  );
};

export default UsuarioDetalles;
