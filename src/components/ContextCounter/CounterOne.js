import { useContext } from "react";
import { CounterContext, CounterContextDispatcher } from "./ContextProvider";
const CounterOne = () => {
  const count = useContext(CounterContext);
  const setCount = useContext(CounterContextDispatcher);
  const addHandler = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>count is : {count}</div>
      <button onClick={addHandler}>AddOne</button>
    </>
  );
};

export default CounterOne;
