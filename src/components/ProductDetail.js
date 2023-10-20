import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, updateQuantity } from "../store/cartSlice";
import "./ProductDetail.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);
  const cartItems = useSelector((state) => state.cart);

  const existingItem = cartItems.find((item) => item.id === product.id);
  const isItemInCart = existingItem !== undefined;

  const incrementQuantity = () => {
    if (existingItem) {
      dispatch(
        updateQuantity({ id: product.id, quantity: existingItem.quantity + 1 })
      );
    }
  };

  const decrementQuantity = () => {
    if (existingItem && existingItem.quantity > 1) {
      dispatch(
        updateQuantity({
          id: product.id,
          quantity: existingItem.quantity - 1,
        })
      );
    }
  };

  const handleAddToCart = () => {
    if (existingItem) {
    } else {
      dispatch(add({ ...product, quantity: 1 }));
    }
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
          <p className="product-detail-description">
            <h4>Product Details: </h4>
            {product.description}
          </p>
        </div>
        <div className="right-column">
          <p className="product-detail-category">
            <strong>Category: </strong>
            {product.category}
          </p>
          <p className="product-detail-price">
            <strong>Price: </strong>$ {product.price}
          </p>
          <div className="quantity">
            <span className="product-detail-qty">
              <strong>Quantity: </strong>
            </span>
            <button className="counter-btn" onClick={decrementQuantity}>
              -
            </button>
            <span>{isItemInCart ? existingItem.quantity : 1}</span>
            <button className="counter-btn" onClick={incrementQuantity}>
              +
            </button>
          </div>
          <button className="btn" onClick={handleAddToCart}>
            {isItemInCart ? "Item Added To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
