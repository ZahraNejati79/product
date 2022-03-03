const Products = (props) => {
  return (
    <div className="product">
      <div>name :{props.name}</div>
      <div>price:{props.price}</div>
      {props.children}
    </div>
  );
};

export default Products;
