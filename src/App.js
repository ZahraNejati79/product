import React from "react";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <div>
      <div>this is shopping</div>
      <Products name="Ali" family="nejati" />
      <Products name="react.js" family="nejati">
        <p>15 %</p>
      </Products>
    </div>
  );
};

export default App;
