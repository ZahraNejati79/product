import React, { useState } from "react";
import Count from "./components/Counter/Counter";
import Products from "./components/Products/Products";
const App = () => {
  const [products, setProducts] = useState([
    { name: "reactjs", price: "100$" },
    { name: "C++", price: "10$" },
    { name: "javaScript", price: "90$" },
  ]);
  return (
    <div>
      <div>this is shopping</div>
      {products.map((product) => {
        return <Products name={product.name} price={product.price} />;
      })}
      <Count />
    </div>
  );
};

export default App;
