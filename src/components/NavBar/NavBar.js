import { useContext } from "react";
import { WebContext } from "../../App";
import { useProducts } from "../providerProducts/ProductsProvider";
const NavBar = () => {
  const products = useProducts();

  return (
    <>
      <header>Count :{products.filter((p) => p.quantity >= 1).length}</header>
    </>
  );
};

export default NavBar;
