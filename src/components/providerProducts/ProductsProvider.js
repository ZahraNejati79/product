import React, { useContext, useReducer, useState } from "react";
import Products from "../Products/Products";
import { productsData } from "../db/products";

const productContext = React.createContext();
const setProductsContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "removeHandler": {
      const filterProduct = state.filter((product) => product.id !== action.id);
      return filterProduct;
    }
    case "incrementHandler": {
      const productCopy = [...state];
      const selectedItem = productCopy.find(
        (product) => product.id === action.id
      );
      selectedItem.quantity++;
      return productCopy;
    }
    case "changeHandler": {
      const copyproduct = [...state];
      const selectedProduct = copyproduct.find((pro) => pro.id === action.id);
      selectedProduct.name = action.event.target.value;
      return copyproduct;
    }
    case "decrementHandler": {
      const copyProducts = [...state];
      const selectedItem = copyProducts.find(
        (product) => product.id === action.id
      );
      selectedItem.quantity--;
      return copyProducts;
    }
    case "filter": {
      if (action.event.value === "all") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (P) => P.size.indexOf(action.event.target.value) >= 0
        );
        return updatedProducts;
      }
    }
    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <productContext.Provider value={products}>
      <setProductsContext.Provider value={dispatch}>
        {children}
      </setProductsContext.Provider>
    </productContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(productContext);
export const useProductAction = () => useContext(setProductsContext);
// const removeHandler = (id) => {
//   const filterProduct = products.filter((product) => product.id !== id);
//   setProducts(filterProduct);
// };
// const incrementHandler = (id) => {
//   const productCopy = [...products];
//   const selectedItem = productCopy.find((product) => product.id === id);
//   selectedItem.quantity++;
//   setProducts(productCopy);
// };
// const changeHandler = (e, id) => {
//   const copyproduct = [...products];
//   const selectedProduct = copyproduct.find((pro) => pro.id === id);
//   selectedProduct.name = e.target.value;
//   setProducts(copyproduct);
// };
// const decrementHandler = (id) => {
//   const copyProducts = [...products];
//   const selectedItem = copyProducts.find((product) => product.id === id);
//   selectedItem.quantity--;
//   setProducts(copyProducts);
// };
