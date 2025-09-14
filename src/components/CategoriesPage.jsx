import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchCategory from "../context/useFetchCategory";
import { Products } from "../context/Products";
import { formatPrice } from "../context/formatPrice";

const CategoriesPage = () => {
  const { category } = useParams();
  const { data, loading } = useFetchCategory(category);
  const { setSearch } = useContext(Products);

  if (loading) {
    return <h1 className="text-center text-xl font-semibold mt-10">Loading...</h1>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {data?.map((item) => (
        <div
          key={item?.id}
          className="w-5/12 md:w-3/12 xl:w-2/12 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <Link to={`/product/${item?.id}`}>
            <div className="p-4 flex flex-col items-center">
              <img
                src={item?.thumbnail}
                alt={item?.title}
                className="h-40 object-contain mb-3"
              />
              <hr className="w-full border-gray-200 mb-3" />
              <p className="sm:text-lg text-base font-semibold text-gray-800 line-clamp-1">
                {item?.title}
              </p>
              <h1 className="sm:text-lg text-base font-medium text-blue-600 mt-1">
                ${formatPrice(item?.price)}
              </h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
