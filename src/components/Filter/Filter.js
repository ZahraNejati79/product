import { useProductAction } from "../providerProducts/ProductsProvider";
const FilterSize = () => {
  const dispatch = useProductAction();
  return (
    <div>
      <div> filter based on :</div>
      <select onChange={(e) => dispatch({ type: "filter", event: e })}>
        <option value="all">ALL</option>
        <option value="l">L</option>
        <option value="x">X</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
      </select>
    </div>
  );
};

export default FilterSize;
