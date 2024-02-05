import AddProductForm from "../components/AddProductForm";
import ShowProductsTable from "../components/ShowProductsTable";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl ">Prodcutos react</h1>
      </div>
      <AddProductForm />
      <ShowProductsTable />
    </>
  );
};

export default HomePage;
