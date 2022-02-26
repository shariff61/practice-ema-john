import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, stock, category, name, price } = props.product;
  const handleButton = props.handleButton;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">Name: {name}</h3>
        <p>By: {category}</p>
        <h3>Price: ${price}</h3>
        <p>Only {stock} left in stock-Order soon</p>
        <button
          className="main-button"
          onClick={() => handleButton(props.product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
