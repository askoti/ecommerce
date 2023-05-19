import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchCategory from "../context/useFetchCategory";
import { Products } from "../context/Products";

const CategoriesPage = () => {
  const { category } = useParams();
  const { data, loading } = useFetchCategory(category);
  const { setSearch } = useContext(Products);

  if (loading) {
    <h1>Loading....</h1>;
  }
  return (
    <div className="flex flex-row flex-wrap p-0 justify-center">
      {data?.map((item) => (
          <div
            className="w-5/12 xl:w-2/12 md:w-3/12 text-center shadow border-gray-light p-1 m-4 rounded"
            key={item?.id}
          >
            <Link to={`/product/${item?.id}`}>
              <img
                src={item?.thumbnail}
                alt=""
                className="h-40 object-contain"
              />
              <hr />
              <p className="sm:text-xl sm:font-semibold mt-2">{item?.title}</p>
              <h1 className="sm:text-lg sm:font-medium">${item?.price}</h1>
            </Link>
          </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
