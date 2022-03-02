import React, { useState } from "react";
import Count from "./components/Counter/Counter";
import Products from "./components/Products/Products";
import UpdateObject from "./components/HookObject";
import HookObject from "./components/HookObject";
import HookArray from "./components/HookArray";
const App = () => {
  const [products, setProducts] = useState([
    { name: "reactjs", price: "100$", id: 1 },
    { name: "C++", price: "10$", id: 2 },
    { name: "javaScript", price: "90$", id: 3 },
  ]);
  return (
    <div>
      <div>this is shopping</div>
      {products.map((product) => {
        return (
          <Products
            name={product.name}
            key={product.id}
            price={product.price}
          />
        );
      })}
      <Count />
    </div>
  );
};

export default App;
