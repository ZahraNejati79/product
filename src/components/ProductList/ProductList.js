import Products from "../Products/Products";
const ProductList = ({ products, removeHandler }) => {
  return (
    <div className="productList">
      {products.map((product) => {
        return <Products product={product} removeHandler={removeHandler} />;
      })}
    </div>
  );
};

export default ProductList;
