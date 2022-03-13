import Products from "../Products/Products";
import {
  useProductAction,
  useProducts,
} from "../providerProducts/ProductsProvider";
const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductAction();
  return (
    <div className="productList">
      {products.map((product) => {
        return (
          <Products
            key={product.id}
            product={product}
            removeHandler={() =>
              dispatch({ type: "removeHandler", id: product.id })
            }
            incrementHandler={() =>
              dispatch({ type: "incrementHandler", id: product.id })
            }
            changeHandler={(e) =>
              dispatch({ type: "changeHandler", id: product.id, event: e })
            }
            decrementHandler={() =>
              dispatch({ type: "decrementHandler", id: product.id })
            }
          />
        );
      })}
    </div>
  );
};

export default ProductList;
