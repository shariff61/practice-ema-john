import React, { useState } from "react";
import { first10 } from "../../../fakeData";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first = first10.slice(0, 10);
  const [products, setProducts] = useState(first);
  const [cart, setCart] = useState([]);
  const handleButton = (product) => {
    console.log("this is cart", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        <p>Products: {products.length}</p>
        {products.map((product) => (
          <Product handleButton={handleButton} product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
