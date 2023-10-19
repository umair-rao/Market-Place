"use client";

import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductDetail } from "../Redux/FetchProducts";
import Fuse from "fuse.js";
import _ from "lodash";
import { StringContext } from "../Provider/StringContext";

const Products = () => {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { stringToPass, searchWord } = useContext(StringContext);

  useEffect(() => {
    dispatch(fetchProductDetail());
  }, []);

  const fetchedProducts = product.products.productDetail;

  const options = {
    includeScore: true,
    keys: ["title"],
  };

  const fuse = new Fuse(fetchedProducts, options);

  const result = fuse.search(searchWord);

  const sortedData = _.sortBy(fetchedProducts, stringToPass);

  return (
    <div className="umair">
      {result.length > 0 ? (
        <div>
          <div className="grid grid-cols-4 bg-gray-100 w-screen">
            {result.map((e, index) => (
              <div
                className="flex flex-col items-center pt-10 pb-2.5 space-y-2 border-2 border-current"
                key={index}
              >
                <div className="image w-72 px-14 pt-10 text-center">
                  <img
                    className="w-40 h-32"
                    src={e.item.image}
                    alt="Product_image"
                  />
                  <h3>{e.item.title.slice(0, 20)}</h3>
                  <h4>Price: {e.item.price}$</h4>
                  <h4>Rating: {e.item.rating.rate}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 bg-gray-100 w-screen">
          {sortedData.map((item, index) => (
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
      )}
    </div>
  );
};

export default Products;
