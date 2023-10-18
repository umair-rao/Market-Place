"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductDetail } from "../Redux/FetchProducts";

const Products = () => {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProductDetail());
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 bg-gray-100 w-screen">
        {product.products.productDetail.map((item, index) => (
          <div
            className="flex flex-col items-center pt-10 pb-2.5 space-y-2 border-2 border-current"
            key={index}
          >
            <div className="image w-72 px-14 pt-10 text-center">
              <img
                className="w-40 h-32"
                src={item.image}
                alt="Product_image"
              />
              <h3>{item.title.slice(0, 20)}</h3>
              <h4>Price: {item.price}$</h4>
              <h4>Rating: {item.rating.rate}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
