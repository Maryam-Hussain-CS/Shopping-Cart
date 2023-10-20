import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, updateQuantity } from "../store/cartSlice";
import "./Cart.css";

const formatProductPrice = (price) => {
  return price.toFixed(2);
};

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleIncrement = (productId) => {
    const item = products.find((item) => item.id === productId);
    if (item) {
      dispatch(updateQuantity({ id: productId, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrement = (productId) => {
    const item = products.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id: productId, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div>
      <h3>Cart</h3>
      {products.length === 0 ? (
        <p className="custom-cart-empty-msg">Your cart is empty!</p>
      ) : (
        <div className="custom-cart-wrapper">
          {products.map((product) => (
            <div key={product.id} className="custom-cart-card">
              <img
                src={product.image}
                alt={product.title}
                className="custom-cart-img"
              />
              <h5 className="custom-product-title">{product.title}</h5>
              <p className="custom-product-price">
                $ {formatProductPrice(product.price)}
              </p>
              <div className="custom-quantity">
                <span>qty </span>
                <button
                  className="custom-counter-btn"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  className="custom-counter-btn"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
              <button
                className="custom-remove-btn"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
