import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { setProducts, setStatus, clear } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setStatus(STATUSES.LOADING));

    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        dispatch(setProducts(data));
        dispatch(setStatus(STATUSES.IDLE));
      } catch (err) {
        console.error(err);
        dispatch(setStatus(STATUSES.ERROR));
      }
    };

    fetchData();

    return () => {
      dispatch(clear());
    };
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAddToCart(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;