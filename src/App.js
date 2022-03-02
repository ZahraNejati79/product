import React, { useState } from "react";
import Count from "./components/Counter/Counter";
import Products from "./components/Products/Products";
import UpdateObject from "./components/HookObject";
import HookObject from "./components/HookObject";
import HookArray from "./components/HookArray";
const App = () => {
  const [products, setProducts] = useState([
    { name: "reactjs", price: "100$" },
    { name: "C++", price: "10$" },
    { name: "javaScript", price: "90$" },
  ]);
  return (
    <div>
      <div>this is shopping</div>
      {/* {products.map((product) => {
        return <Products name={product.name} price={product.price} />;
      })}
      <Count /> */}
      <HookArray />
    </div>
  );
};

export default App;
