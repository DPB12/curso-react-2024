import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegistrarForm = () => {
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("los datos del usuario: ", formData);
  }

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
        ></input>
        <br />
        <br />
        <label>Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
        ></input>
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          id="pass1"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input type="submit" placeholder="Enviar" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default RegistrarForm;
