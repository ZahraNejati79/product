import { useState } from "react";
const WithCounter = (WrappedComponent) => {
  const UpdateComponent = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      console.log(count);
      setCount(count + 1);
    };
    return <WrappedComponent count={count} increment={increment} />;
  };
  return UpdateComponent;
};

export default WithCounter;
