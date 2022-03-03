import Products from "../Products/Products";
const ProductList = ({ products }) => {
  return (
    <div className="productList">
      {products.map((product) => {
        return (
          <Products
            name={product.name}
            key={product.id}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
