import { useEffect, useRef, useState } from "react";

const Reset = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const resetHandler = () => {
    setInputValue("");
    inputRef.current.focus();
  };
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={changeHandler}
      />
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Reset;
