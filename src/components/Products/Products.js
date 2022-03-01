const Products = (props) => {
  return (
    <div>
      <div>name :{props.name}</div>
      <div>name :{props.family}</div>
      {props.children}
    </div>
  );
};

export default Products;
