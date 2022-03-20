import { useState } from "react";
import Select from "react-select";
import { useProductAction } from "../providerProducts/ProductsProvider";
const FilterSize = () => {
  const [filterValue, setFilterVlaue] = useState("");
  const [sort, setSort] = useState("");
  const filterOptions = [
    { value: "", label: "ALL" },
    { value: "l", label: "L" },
    { value: "x", label: "X" },
    { value: "xl", label: "XL" },
    { value: "xxl", label: "XXL" },
  ];
  const sortOptions = [
    { value: "up", label: "UptoDown" },
    { value: "down", label: "DowntoUp" },
  ];
  const dispatch = useProductAction();
  const filterHandler = (selectedFilter) => {
    setFilterVlaue(selectedFilter);
    dispatch({ type: "filter", event: selectedFilter });
  };
  const sortHandler = (selectedSort) => {
    setSort(selectedSort);
    dispatch({ type: "sort", event: selectedSort });
  };
  return (
    <div>
      <div> filter based on :</div>
      <Select
        options={filterOptions}
        onChange={filterHandler}
        value={filterValue}
      />
      {/* <select onChange={filterHandler} value={value}>
        <option value="">ALL</option>
        <option value="l">L</option>
        <option value="x">X</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
      </select> */}
      <Select options={sortOptions} onChange={sortHandler} value={sort} />
    </div>
  );
};

export default FilterSize;
