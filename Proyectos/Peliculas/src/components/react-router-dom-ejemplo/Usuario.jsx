import { Link } from "react-router-dom";

function Usuario() {
  return (
    <>
      <div className="text-3x1 mb-10 m-10">Usuario</div>
      <div>
        <Link to="/">Ir al inicio</Link>
      </div>
    </>
  );
}

export default Usuario;
