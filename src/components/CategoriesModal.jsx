import React, { useContext } from "react";
import { categories } from "../data";
import { Link } from "react-router-dom";
import { Products } from "../context/Products";

const CategoriesModal = ({ setCategory }) => {
  const { setSearch } = useContext(Products);
  const ctgHandler = () => {
    setCategory(false);
    setSearch(null);
  };

  return (
    <div className="absolute left-2/4 top-20 w-1/3 h-1/4 bg-white border bg-opacity-95 z-10 p-6 rounded-md">
      <div className="">
        <ul className="flex flex-wrap justify-between align-middle my-4">
          {categories.map(({ name, href, index }) => (
            <li key={index} className="p-2">
              <Link
                to={`/categories/${href}`}
                className="hover:text-blue"
                onClick={ctgHandler}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesModal;
