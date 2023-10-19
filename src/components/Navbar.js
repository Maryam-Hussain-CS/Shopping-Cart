import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  const navbarStyle = {
    background: "#333",
    color: "#fff",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fff",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    margin: "0 10px",
  };

  const cartCountStyle = {
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <div style={navbarStyle}>
      <span style={logoStyle}>MyStore</span>
      <div>
        <Link style={linkStyle} to="/">
          Home
        </Link>
        <Link style={linkStyle} to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <span style={cartCountStyle}>Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
