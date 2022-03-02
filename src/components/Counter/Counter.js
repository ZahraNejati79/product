import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>count : {count}</div>
      <button onClick={addOneHandler}>AddOne</button>
    </div>
  );
};

export default Count;
