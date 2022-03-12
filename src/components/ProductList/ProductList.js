import Products from "../Products/Products";
import {
  useProducts,
  useSetProducts,
} from "../providerProducts/ProductsProvider";
const ProductList = () => {
  const products = useProducts();
  const {
    setProducts,
    removeHandler,
    incrementHandler,
    changeHandler,
    decrementHandler,
  } = useSetProducts();
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
