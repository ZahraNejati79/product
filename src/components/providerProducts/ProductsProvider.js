import React, { useContext, useEffect, useReducer, useState } from "react";

import axios from "axios";

const productContext = React.createContext();
const setProductsContext = React.createContext();

const productsData = { data: [] };
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
    // case "changeHandler": {
    //   const copyproduct = [...state];
    //   const selectedProduct = copyproduct.find((pro) => pro.id === action.id);
    //   selectedProduct.name = action.event.target.value;
    //   return copyproduct;
    // }
    case "decrementHandler": {
      const copyProducts = [...state];
      const selectedItem = copyProducts.find(
        (product) => product.id === action.id
      );
      selectedItem.quantity--;
      return copyProducts;
    }
    case "filter": {
      if (action.event.value == "") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (P) => P.size.indexOf(action.event.value) >= 0
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const products = [...state];
      if (action.event.value === "highest") {
        const sorttedProducts = products.sort((a, b) => {
          if (a.price < b.price) return 1;
          if (a.price > b.price) return -1;
          return 0;
        });
        return sorttedProducts;
      } else {
        const sorttedProducts = products.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        });
        return sorttedProducts;
      }
    }
    case "search": {
      const searchValue = action.event.target.value;
      console.log(searchValue);
      const products = [...state];
      const searchProducts = products.filter((p) =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      return searchProducts;
    }
    case "FetchProject": {
      const { data } = action.payload;
      return data;
    }
    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/productsData");
        console.log(data);
        dispatch({ type: "FetchProject", payload: { data } });
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
    // axios
    //   .get("http://localhost:3001/productsData")
    //   .then((res) => {
    //     console.log(res);
    //     setProductsData(res.data);
    //   })
    //   .catch((error) => console.log(error));
  }, []);
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
