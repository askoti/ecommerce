import React, { useContext, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FirstPic from "../assets/pic1.png";
import SecondPic from "../assets/pic2.png";
import ThirdPic from "../assets/pic3.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Products } from "../context/Products";
import { Link } from "react-router-dom";
import { formatPrice } from "../context/formatPrice";
import Footer from "./Footer";
import loading_gif from "../assets/loading.gif";

const Hero = () => {
  const {
    loading,
    products,
    page,
    setPage,
    limit,
    total,
    scrollY,
    setScrollY,
  } = useContext(Products);

  // Save scroll position on unmount
  useEffect(() => {
    return () => {
      setScrollY(window.scrollY);
    };
  }, [setScrollY]);

  // Restore scroll position on mount
  useEffect(() => {
    if (scrollY > 0) {
      window.scrollTo(0, scrollY);
    }
  }, [scrollY]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <img src={loading_gif} className="w-20 h-20" alt="Loading..." />
      </div>
    );
  }

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-transform duration-200 text-white text-xl rounded-full shadow-xl font-semibold">
          Shop Now
          <IoArrowForwardCircleSharp className="text-3xl rotate-90" />
        </button>
      </div>
      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-12 px-2 sm:px-4">
        {products?.length ? (
          products.map((item) => (
            <div
              key={item.id}
              className="w-5/12 sm:w-48 md:w-56 lg:w-64 xl:w-72 text-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-3 sm:p-4"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item?.thumbnail}
                  alt={item?.title}
                  className="h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 object-contain mx-auto mb-3"
                />
                <div className="border-t pt-3">
                  <p className="text-sm sm:text-base md:text-lg font-semibold truncate">
                    {item?.title}
                  </p>
                  <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mt-1">
                    ${formatPrice(item?.price)}
                  </h1>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h1 className="text-3xl font-bold text-gray-600 mt-10">
            Couldn't find anything
          </h1>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`px-4 py-2 rounded-lg ${
                  num === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
