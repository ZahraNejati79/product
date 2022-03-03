import Products from "../Products/Products";
const ProductList = ({ products, removeHandler, incrementHandler }) => {
  return (
    <div className="productList">
      {products.map((product) => {
        return (
          <Products
            key={product.id}
            product={product}
            removeHandler={removeHandler}
            incrementHandler={incrementHandler}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
