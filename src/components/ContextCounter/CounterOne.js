import { useCount, useCountAction } from "./ContextProvider";
const CounterOne = () => {
  const count = useCount();
  const { addHandler, addFiveHandler } = useCountAction();
  return (
    <>
      <div>count is : {count}</div>
      <button onClick={addHandler}>AddOne</button>
      <button onClick={addFiveHandler}>AddFive</button>
    </>
  );
};

export default CounterOne;
