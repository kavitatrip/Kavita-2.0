import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import React from "react";

const Cart = () => {
  const cartInfo = useSelector((store) => store.cart.items);
  console.log(cartInfo);

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-4xl font-bold">Cart</h1>
      <div>
        <ItemsList items={cartInfo} />
      </div>
    </div>
  );
};

export default Cart;
