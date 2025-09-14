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
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4">
      <ul className="flex flex-col gap-2">
        {categories.map(({ name, href, index }) => (
          <li key={index}>
            <Link
              to={`/categories/${href}`}
              className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={ctgHandler}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesModal;
