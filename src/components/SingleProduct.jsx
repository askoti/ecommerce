import React, { useContext, useState } from "react";
import useFetch from "../context/useFetch";
import { useParams } from "react-router-dom";
import { Products } from "../context/Products";
import { cartData } from "../data";
import Footer from "./Footer";

const SingleProduct = () => {
  const [size, setSize] = useState(1);
  const { id } = useParams();
  const { data, loading, error } = useFetch(id);
  const [picIndex, setPicIndex] = useState(0);
  const { cart, setCart } = useContext(Products);

  const handleData = (id) => {
    let findID = cartData.findIndex((obj) => obj.id == id);
    if (cartData[findID]) {
      cartData[findID].quantity = cartData[findID].quantity + size;
    } else {
      setCart(cart + 1);
      let obj = {
        id: data?.id,
        title: data?.title,
        image: data?.images[0],
        price: data?.price,
        category: data?.category,
        quantity: size,
      };
      cartData.push(obj);

      console.log(cartData);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        <div className="mt-8">
          <a href="/" className="p-4 m-6">◁ Back to Home</a>
          <div className="flex flex-row flex-wrap p-2 m-4 justify-between -z-10">
            <div className="flex flex-row justify-evenly p-1 m-1 sm:w-6/12">
                <div className="flex flex-col sm:w-2/5 sm:h-2/5 w-32 h-auto">
                  {data?.images.map((img, index) => (
                    <img
                      src={img}
                      key={index}
                      alt=""
                      className="sm:w-3/6 w-3/6 h-2/6 p-1 object-contain"
                      onMouseOver={() => setPicIndex(index)}
                    />
                  ))}
                </div>
                <div className="flex sm:w-2/3 w-2/4">
                  <img
                    src={data?.images[picIndex]}
                    alt=""
                    className="w-full sm:object-none object-contain"
                  />
                </div>
            </div>

            <div className="flex flex-col flex-nowrap justify-start my-20 sm:mx-10 sm:w-5/12">
                <p className="bg-gray p-2 text-white rounded">{data?.brand}</p>
                <h1 className="sm:text-4xl text-xl font-semibold p-2">{data?.title}</h1>
                <h1 className="sm:text-4xl text-md font-semibold p-2">${data?.price}</h1>
                <div className="flex flex-col flex-nowrap p-2">
                  <p className="my-2"><span className="font-semibold">Details: </span>{data?.description}</p>
                  <p>Discount: {data?.discountPercentage}%</p>
                  <p>Rating: {data?.rating}</p>
                  <p>Stock: {data?.stock}</p>
                </div>
                <div className="flex flex-col mt-10 mx-auto">
                  <div className="flex flex-row flex-nowrap justify-evenly p-3 m-1 sm:w-96 w-64">
                    <button
                      className="p-3 m-1"
                      onClick={() => setSize(size === 0 ? size - 0 : size - 1)}
                    >
                      -
                    </button>
                    <p className="p-3 m-1 ">{size}</p>
                    <button
                      className="p-3 m-1"
                      onClick={() => setSize(size + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="p-3 m-1 sm:w-96 w-64 bg-blue text-white rounded"
                    onClick={() => handleData(id)}
                  >
                    Add to Cart
                  </button>
                  <button className="p-3 m-1 sm:w-96 w-64 text-gray rounded">
                    Buy Now
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
