import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, increment, decrement } from "../store/cartSlice";
import "./ProductDetail.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);

  const handleAddToCart = () => {
    dispatch(add(product));
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>Price: Rs. {product.price}</h4>
      <div className="quantity">
        <span>Qty: </span>
        <button className="counter-btn" onClick={() => decrement(product.id)}>
          -
        </button>
        <span>{product.quantity || 1}</span>
        <button className="counter-btn" onClick={() => increment(product.id)}>
          +
        </button>
      </div>
      <button className="btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
