import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navcontainer">
      <div className="logo">
        <img
          src="http://cdn2.cdnme.se/4884053/9-3/net_5dcdbf159606ee08a7081c6e.png"
          alt="netflix logo"
        />
      </div>
      <div className="links">
        <Link to="#">Home</Link>
        <Link to="#">Products</Link>
        <Link to="#">Contact</Link>
        <a href="tel:1234567890">Call us</a>
      </div>
    </div>
  );
};

export default Navbar;
