import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(5);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleQuit = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(5);
  };

  return {
    // properties
    counter,
    //methods / actions
    handleAdd,
    handleQuit,
    handleReset,
  };
};

export default useCounter;
