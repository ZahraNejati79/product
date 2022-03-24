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
import { useProducts } from "./components/providerProducts/ProductsProvider";
import FilterSize from "./components/Filter/Filter";
import SearchTilte from "./components/Search/Search";

export const WebContext = React.createContext();

const App = () => {
  const [isShow, setIsShow] = useState(true);
  const products = useProducts();

  // useEffect(() => {
  //   setCount(products.length);
  //   console.log("product.length", count);
  // }, [products]);

  return (
    <>
      <ProductsProvider>
        <NavBar />

        <FilterSize />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "App");
