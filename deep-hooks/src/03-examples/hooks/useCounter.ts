import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (counter <= 1) return;

    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    decrement,
  };
};

export default useCounter;
