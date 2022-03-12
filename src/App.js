import React, { useEffect, useState } from "react";
import Count from "./components/Counter/Counter";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import ClassCounter from "./components/ClassCounter/ClassCounter";
import Timer from "./components/FunctionalTimer/FanctionalTimer";
import Wrapper from "./components/hoc/Wrapper";
import HoverCounter from "./components/Count/HoverCounter";
import ClickCounter from "./components/Count/ClickCounter";
import Reset from "./components/Ref/Reset";
import CounterProvider from "./components/ContextCounter/ContextProvider";
import CounterReduce from "./components/Reduce/ReducerCountState";
import ProductsProvider, {
  useSetProducts,
} from "./components/providerProducts/ProductsProvider";
import {
  useProducts,
  useStateProducts,
} from "./components/providerProducts/ProductsProvider";

export const WebContext = React.createContext();

const App = () => {
  const [isShow, setIsShow] = useState(true);
  const products = useProducts();
  const setProducts = useSetProducts();
  // useEffect(() => {
  //   setCount(products.length);
  //   console.log("product.length", count);
  // }, [products]);

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
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <ProductList
          removeHandler={removeHandler}
          incrementHandler={incrementHandler}
          changeHandler={changeHandler}
          decrementHandler={decrementHandler}
        />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "App");
