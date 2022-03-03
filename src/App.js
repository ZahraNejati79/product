import React, { useState } from "react";
import Count from "./components/Counter/Counter";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
const App = () => {
  const [products, setProducts] = useState([
    { name: "reactjs", price: "100$", id: 1, quantity: 0 },
    { name: "C++", price: "10$", id: 2, quantity: 1 },
    { name: "javaScript", price: "90$", id: 3, quantity: 0 },
  ]);
  const removeHandler = (id) => {
    const filterProduct = products.filter((product) => product.id !== id);
    setProducts(filterProduct);
  };

  return (
    <div className="App">
      <div>this is shopping</div>
      <ProductList products={products} removeHandler={removeHandler} />
      <Count />
    </div>
  );
};

export default App;
