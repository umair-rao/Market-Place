"use client";

import Link from "next/link";
import { useContext } from "react";
import { StringContext } from "../Provider/StringContext";

const Navbar = () => {
  const { setStringToPass, setSearchWord } = useContext(StringContext);

  const handleNameClick = () => {
    setStringToPass("title");
  };

  const handleRatingClick = () => {
    setStringToPass("rating.rate");
  };

  const handlePriceClick = () => {
    setStringToPass("price");
  };

  const findProduct = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-3xl tracking-tight">
          Zimo Products
        </span>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="relative flex text-sm pr-5">
          <div className="text-2xl pr-5">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={findProduct}
              placeholder="Search your product"
            />
          </div>
          <div className="inline-block relative w-28">
            <select
              onChange={(e) => {
                const selectedValue = e.target.value;
                if (selectedValue === "title") {
                  handleNameClick();
                } else if (selectedValue === "rating") {
                  handleRatingClick();
                } else if (selectedValue === "price") {
                  handlePriceClick();
                }
              }}
              className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="" disabled selected hidden>
                Sort by
              </option>
              <option value="title">Title</option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 8.707a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <ul className="text-sm lg:flex-grow lg:flex lg:items-center lg:justify-end">
            <li className="mr-3">
              <Link
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black mr-4"
              >
                Homepage
              </Link>
            </li>
            <li className="mr-3">
              <Link
                href="/Contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black mr-4"
              >
                Contact
              </Link>
            </li>
            <li className="mr-3">
              <Link
                href="/About"
                className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
