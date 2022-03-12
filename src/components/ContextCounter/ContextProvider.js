import React, { useContext, useState } from "react";
import CounterOne from "./CounterOne";

export const CounterContext = React.createContext();
export const CounterContextDispatcher = React.createContext();
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
        <CounterOne />
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => {
  const setCount = useContext(CounterContextDispatcher);
  const addHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addFiveHandler = () => {
    setCount((prevCount) => prevCount + 5);
  };
  return { addHandler, addFiveHandler };
};
