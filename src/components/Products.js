import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setProducts,
  selectProduct,
  setStatus,
  clear,
} from "../store/productSlice";
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
          throw Error(`HTTP error! Status: ${res.status}`);
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
          <Link className="link-style"
            to={`/product/${product.id}`}
            onClick={() => dispatch(selectProduct(product))}
          >
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-content">
              <h4>{product.title}</h4>
              <p>Category: {product.category}</p>
              <p>Price: Rs. {product.price}</p>
            </div>

          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
