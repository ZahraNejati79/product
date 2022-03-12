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
