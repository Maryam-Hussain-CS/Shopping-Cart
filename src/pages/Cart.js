import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, increment, decrement } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleIncrement = (productId) => {
    dispatch(increment(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrement(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h>Rs. {product.price}</h>
            <div className="quantity">
              <span>qty </span>
              <button
                className="counter-btn"
                onClick={() => handleDecrement(product.id)}
              >
                -
              </button>
              <span> {product.quantity} </span>
              <button
                className="counter-btn"
                onClick={() => handleIncrement(product.id)}
              >
                +
              </button>
            </div>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
