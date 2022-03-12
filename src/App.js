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

export const WebContext = React.createContext();

const App = () => {
  const [products, setProducts] = useState([
    { name: "reactjs", price: "100$", id: 1, quantity: 1 },
    { name: "C++", price: "10$", id: 2, quantity: 1 },
    { name: "javaScript", price: "90$", id: 3, quantity: 1 },
  ]);

  const [isShow, setIsShow] = useState(true);

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
      <CounterReduce />
      {/* <WebContext.Provider value="Zahra">
        <NavBar count={products.filter((p) => p.quantity >= 1).length} />
        <ProductList
          products={products}
          removeHandler={removeHandler}
          incrementHandler={incrementHandler}
          changeHandler={changeHandler}
          decrementHandler={decrementHandler}
        />
      </WebContext.Provider> */}
    </>
  );
};

export default Wrapper(App, "App");
