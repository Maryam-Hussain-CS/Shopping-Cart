// ProductDetail.js

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
      <h2 className="product-detail-title">{product.title}</h2>
      <div className="columns">
        <div className="left-column">
          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.title}
              className="ProductDetailImg"
            />
          </div>
          <p>{product.description}</p>
        </div>
        <div className="right-column">
          <p className="product-detail-category">
            Category: {product.category}
          </p>
          <p className="product-detail-price">Price: Rs. {product.price}</p>
          <div className="quantity">
            <span className="product-detail-qty">Qty: </span>
            <button
              className="counter-btn"
              onClick={() => decrement(product.id)}
            >
              -
            </button>
            <span>{product.quantity || 1}</span>
            <button
              className="counter-btn"
              onClick={() => increment(product.id)}
            >
              +
            </button>
          </div>
          <button className="btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
