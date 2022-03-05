import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTimer(timer + 1), 1000);
    console.log(timer);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return <div></div>;
};

export default Timer;
