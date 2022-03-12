import React, { useContext, useState } from "react";
import Products from "../Products/Products";

const productContext = React.createContext();
const setProductsContext = React.createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "reactjs", price: "100$", id: 1, quantity: 1 },
    { name: "C++", price: "10$", id: 2, quantity: 1 },
    { name: "javaScript", price: "90$", id: 3, quantity: 1 },
  ]);
  return (
    <productContext.Provider value={products}>
      <setProductsContext.Provider value={setProducts}>
        {children}
      </setProductsContext.Provider>
    </productContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(productContext);
export const useSetProducts = () => {
  const products = useContext(productContext);
  const setProducts = useContext(setProductsContext);
  const removeHandler = (id) => {
    const filterProduct = products.filter((product) => product.id !== id);
    setProducts(filterProduct);
  };
  const incrementHandler = (id) => {
    const productCopy = [...products];
    const selectedItem = productCopy.find((product) => product.id === id);
    selectedItem.quantity++;
    setProducts(productCopy);
  };
  const changeHandler = (e, id) => {
    const copyproduct = [...products];
    const selectedProduct = copyproduct.find((pro) => pro.id === id);
    selectedProduct.name = e.target.value;
    setProducts(copyproduct);
  };
  const decrementHandler = (id) => {
    const copyProducts = [...products];
    const selectedItem = copyProducts.find((product) => product.id === id);
    selectedItem.quantity--;
    setProducts(copyProducts);
  };
  return {
    setProducts,
    removeHandler,
    incrementHandler,
    changeHandler,
    decrementHandler,
  };
};
