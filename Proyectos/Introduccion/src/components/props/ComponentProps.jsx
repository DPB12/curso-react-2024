const Card = (props) => {
  const { title, description, bgColor } = props;

  return (
    <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
      <h2 className="text-x1 font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

const ComponentProps = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card
        title="Tarjeta1"
        description="contenidoTarjeta"
        bgColor="bg-screen"
      />
      <Card
        title="Tarjeta1"
        description="contenidoTarjeta"
        bgColor="bg-screen"
      />
      <Card
        title="Tarjeta1"
        description="contenidoTarjeta"
        bgColor="bg-screen"
      />
      <Card
        title="Tarjeta1"
        description="contenidoTarjeta"
        bgColor="bg-screen"
      />
    </div>
  );
};

export default ComponentProps;
