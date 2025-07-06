import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  qty: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", qty: 1 },
  { productName: "PS5", qty: 2 },
  { productName: "Xbox Serie X", qty: 5 },
];

function FirstStepsApp() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {itemsInCart.map(({ productName, qty }) => (
        <ItemCounter name={productName} qty={qty} />
      ))}
    </div>
  );
}

export default FirstStepsApp;
