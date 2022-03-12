import { useReducer, useState } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
const CounterReduce = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count : {count}</div>
      <button onClick={() => dispatch("addOne")}>AddOne</button>
      <button onClick={() => dispatch("addFive")}>AddFive</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </div>
  );
};

export default CounterReduce;
