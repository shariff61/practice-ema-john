import React from "react";

const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce((total, product) => total + product.price, 0);

  let shipping;
  if (total > 450) {
    shipping = 0;
  } else if (total > 150) {
    shipping = 4.19;
  } else if (total > 0) {
    shipping = 12.99;
  } else {
    shipping = 0;
  }
  const tax = (total / 10).toFixed(2);
  const grandTotal = total + shipping + Number(tax);

  const formatNumber = (num) => {
    const preceises = num.toFixed(2);
    return Number(preceises);
  };
  return (
    <div>
      <h3>Order-Summary</h3>
      <p>Items Orderd: {cart.length}</p>
      <p>Product Price: {formatNumber(total)}</p>
      <p>Shipping & handling: {shipping}</p>
      <p>Total before tax: </p>
      <p>Estimated tax: {tax} </p>
      <p>Total Price: {formatNumber(grandTotal)} </p>
    </div>
  );
};

export default Cart;
