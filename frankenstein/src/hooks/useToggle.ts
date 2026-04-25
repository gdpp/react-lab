import { useState } from "react";

export const useToggle = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const setToTrue = () => setState(true);
  const setToFalse = () => setState(false);
  const toggle = () => setState((prev) => !prev);

  return [state, setToTrue, setToFalse, toggle];
};
