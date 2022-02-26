import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order-review</a>
        <a href="/manage">Manage-Inventory</a>
        {/* <Link to="/shop">Shop</Link>
        <Link to="/review">Order-review</Link>
        <Link to="/manage">Manage-Inventory</Link> */}
      </nav>
    </div>
  );
};

export default Header;
