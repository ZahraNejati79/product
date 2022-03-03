import { useState } from "react";

const Products = ({
  product,
  removeHandler,
  incrementHandler,
  changeHandler,
}) => {
  return (
    <div className="product">
      <div>name :{product.name}</div>
      <div>price:{product.price}</div>
      <div className="quantity">{product.quantity}</div>
      <input type="text" onChange={(e) => changeHandler(e, product.id)} />
      <button
        className="btn increment"
        onClick={() => incrementHandler(product.id)}
      >
        +
      </button>
      <button className="btn" onClick={() => removeHandler(product.id)}>
        delete
      </button>
      <button className="btn">-</button>
    </div>
  );
};

export default Products;
