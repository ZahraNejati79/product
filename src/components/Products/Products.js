const Products = ({
  product,
  removeHandler,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <div className="product">
      <div>name :{product.title}</div>
      <div>price:{product.price}</div>
      <div className="quantity">{product.quantity}</div>
      {/* <input type="text" onChange={(e) => changeHandler(e, product.id)} /> */}
      <div>
        <button
          className="btn increment"
          onClick={() => incrementHandler(product.id)}
        >
          +
        </button>
        <button className="btn" onClick={() => removeHandler(product.id)}>
          delete
        </button>
        <button
          className="btn"
          onClick={
            product.quantity >= 2
              ? () => decrementHandler(product.id)
              : () => removeHandler(product.id)
          }
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Products;
