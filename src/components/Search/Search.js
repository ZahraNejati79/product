import { useState } from "react";
import { useProductAction } from "../providerProducts/ProductsProvider";

const SearchTilte = ({ filter }) => {
  const dispatch = useProductAction();
  const searchHandler = (e) => {
    dispatch({ type: "filter", event: filter });
    dispatch({ type: "search", event: e });
  };

  return (
    <div>
      <input onChange={searchHandler}></input>
    </div>
  );
};

export default SearchTilte;
