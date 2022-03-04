import Products from "../Products/Products";
const ProductList = ({
  products,
  removeHandler,
  incrementHandler,
  changeHandler,
  decrementHandler,
}) => {
  return (
    <div className="productList">
      {products.map((product) => {
        return (
          <Products
            key={product.id}
            product={product}
            removeHandler={removeHandler}
            incrementHandler={incrementHandler}
            changeHandler={changeHandler}
            decrementHandler={decrementHandler}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
