const Products = ({ product, removeHandler }) => {
  return (
    <div className="product">
      <div>name :{product.name}</div>
      <div>price:{product.price}</div>
      {product.children}
      <button className="btn">+</button>
      <button className="btn" onClick={() => removeHandler(product.id)}>
        delete
      </button>
      <button className="btn">-</button>
    </div>
  );
};

export default Products;
