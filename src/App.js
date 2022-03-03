import React, { useState } from "react";
import Count from "./components/Counter/Counter";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
const App = () => {
  const [products, setProducts] = useState([
    { name: "reactjs", price: "100$", id: 1 },
    { name: "C++", price: "10$", id: 2 },
    { name: "javaScript", price: "90$", id: 3 },
  ]);
  return (
    <div className="App">
      <div>this is shopping</div>
      <ProductList products={products} />
      <Count />
    </div>
  );
};

export default App;
