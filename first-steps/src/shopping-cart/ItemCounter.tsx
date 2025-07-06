import { useState } from "react";

interface Props {
  name: string;
  qty?: number;
}

export const ItemCounter = ({ name, qty = 1 }: Props) => {
  const [count, setCount] = useState(qty);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <section
      style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}
    >
      <span style={{ width: 150 }}>{name}</span>
      <button onClick={handleDecrement}> - 1 </button>
      <span>{count}</span>
      <button onClick={handleIncrement}> + 1 </button>
    </section>
  );
};
