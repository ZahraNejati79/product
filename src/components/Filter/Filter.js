import { useState } from "react";
import { useProductAction } from "../providerProducts/ProductsProvider";
const FilterSize = () => {
  const [value, setVlaue] = useState("");
  const dispatch = useProductAction();
  const filterHandler = (e) => {
    dispatch({ type: "filter", event: e });
    setVlaue(value);
  };
  return (
    <div>
      <div> filter based on :</div>
      <select onChange={filterHandler} value={value}>
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
