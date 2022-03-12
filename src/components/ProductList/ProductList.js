import Products from "../Products/Products";
import { useProducts } from "../providerProducts/ProductsProvider";
const ProductList = ({
  removeHandler,
  incrementHandler,
  changeHandler,
  decrementHandler,
}) => {
  const products = useProducts();
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
