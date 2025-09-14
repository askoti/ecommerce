import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchSearch from "../context/useFetchSearch";
import { formatPrice } from "../context/formatPrice";
import Footer from "./Footer";

const Search = () => {
  const { search } = useParams();
  const { data, loading } = useFetchSearch(search);

  if (loading) {
    return <h1 className="text-center text-xl font-medium p-6">Loading...</h1>;
  }

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-6 p-6">
        {data?.length ? (
          data.map((item) => (
            <div
              key={item?.id}
              className="w-5/12 xl:w-2/12 md:w-3/12 bg-white shadow-md rounded-xl p-4 transition hover:shadow-lg hover:scale-105"
            >
              <Link to={`/product/${item?.id}`} className="block">
                <div className="flex justify-center">
                  <img
                    src={item?.thumbnail}
                    alt={item?.title}
                    className="h-40 object-contain mb-4 rounded"
                  />
                </div>
                <hr className="mb-2" />
                <p className="sm:text-lg font-semibold text-gray-dark truncate">
                  {item?.title}
                </p>
                <h1 className="sm:text-md font-bold text-brand-blue mt-1">
                  ${formatPrice(item?.price)}
                </h1>
              </Link>
            </div>
          ))
        ) : (
          <div className="text-center my-16 text-2xl font-semibold p-10 rounded-xl shadow-md bg-gray-light/30">
            <h1>We don’t have the product you’re looking for 😞</h1>
          </div>
        )}
      </div>
      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default Search;
