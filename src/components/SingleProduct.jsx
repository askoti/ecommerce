import React, { useContext, useState } from "react";
import useFetch from "../context/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Products } from "../context/Products";
import { cartData } from "../data";
import Footer from "./Footer";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(id);
  const [picIndex, setPicIndex] = useState(0);
  const { cart, setCart, size, setSize } = useContext(Products);
  const navigate = useNavigate();

  const handleData = (id) => {
    let findID = cartData.findIndex((obj) => obj.id === id);
    if (cartData[findID]) {
      cartData[findID].quantity += size;
    } else {
      setCart(cart + 1);
      const obj = {
        id: data?.id,
        title: data?.title,
        image: data?.images[0],
        price: data?.price,
        category: data?.category,
        quantity: size,
      };
      cartData.push(obj);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <h1 className="text-2xl font-semibold text-gray-600">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="mt-8 px-6">
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          ◁ Back
        </button>

        {/* Product Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-4 lg:w-1/2">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-1/5">
              {data?.images.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  alt=""
                  className={`w-20 h-20 object-contain border rounded-lg cursor-pointer transition ${
                    index === picIndex
                      ? "border-blue-600 ring-2 ring-blue-300"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                  onMouseOver={() => setPicIndex(index)}
                />
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center border rounded-lg bg-white shadow-sm">
              <img
                src={data?.images[picIndex]}
                alt=""
                className="w-full max-h-[500px] object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <span className="inline-block bg-gray-800 text-white text-sm font-medium px-3 py-1 rounded-full w-fit">
              {data?.brand}
            </span>
            <h1 className="text-3xl font-bold text-gray-800">{data?.title}</h1>
            <h2 className="text-2xl font-semibold text-blue-600">
              ${data?.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h2>

            {/* Details */}
            <div className="text-gray-600 space-y-2">
              <p>
                <span className="font-semibold">Details: </span>
                {data?.description}
              </p>
              <p>
                <span className="font-semibold">Discount:</span>{" "}
                {data?.discountPercentage}%
              </p>
              <p>
                <span className="font-semibold">Rating: ⭐ </span>
                {data?.rating}
              </p>
              <p>
                <span className="font-semibold">Stock:</span> {data?.stock}
              </p>
            </div>

            {/* Quantity Selector + Buttons */}
            <div className="mt-6">
              <div className="flex items-center gap-4 mb-4">
                <button
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                  onClick={() => setSize(Math.max(size - 1, 0))}
                >
                  -
                </button>
                <span className="px-6 py-2 border rounded text-lg font-medium">
                  {size}
                </span>
                <button
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                  onClick={() => setSize(size + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="w-full sm:w-96 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md font-medium transition"
                onClick={() => {
                  handleData(data.id);
                  setSize(1);
                }}
              >
                Add to Cart
              </button>
              <button className="w-full sm:w-96 mt-3 px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default SingleProduct;
