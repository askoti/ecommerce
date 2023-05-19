import React, { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Products } from "../context/Products";
import { cartData, deletePFM, emptyCart } from "../data";
import { Link } from "react-router-dom";

const Modal = () => {
  const { setIsCartOpen, cart, setCart, totalPrice, setTotalPrice, setNav } = useContext(Products);

  const total = () => {
    cartData.forEach((data) => {
      const calc = data?.price * data?.quantity / 2;
      setTotalPrice((prev) => prev += calc)
    });
  };
  
  const handleCc = () => {
    setIsCartOpen(false)
    setNav(false)
  }

  useEffect(() => {
    total();
  }, []);

  return (
    <div className="absolute my-20 left-1/2 trasform -translate-x-1/2 sm:w-2/3 w-11/12 bg-white border rounded-lg bg-opacity-90 z-10">
      <button
        className="relative p-2 -left-3 -top-4 bg-gray text-white rounded-full"
        onClick={() => setIsCartOpen(false)}
      >
        <FaTimes />
      </button>
      <h1 className="sm:text-3xl text-xl font-semibold p-4 m-2 align-middle">Shopping Cart</h1>
      <hr />
      {cartData.length ? (
        cartData.map((data) => (
          <div className="flex flex-row justify-between m-2 p-0" key={data?.id}>
            <div className="flex flex-row justify-start align-middle">
              <div className="sm:w-52 w-36 h-30">
                <img src={data?.image} alt="" />
              </div>
              <div className="align-middle p-2 my-4">
                <h1 className="p-1 sm:text-2xl text-sm font-semibold">{data?.title}</h1>
                <p className="p-1 font-thin sm:text-xl text-sm">Quantity: {data?.quantity}</p>
              </div>
            </div>
            <div className="w-1/8 flex flex-col justify-around justify-items-center text-right">
              <button
                className="p-2 sm:text-lg text-xs font-semibold my-4 bg-red text-silver sm:h-10 h-7 float-right text-right rounded"
                onClick={(e) => deletePFM(data?.id, cart, setCart, setTotalPrice, totalPrice, data?.price * data?.quantity, e)}
              >
                Delete
              </button>
              <h1 className="p-2 sm:text-lg text-xs font-semibold sm:my-4 float-right">
                ${data?.price * data?.quantity}
              </h1>
            </div>
          </div>
        ))
      ) : (
        <h1 className="sm:text-3xl text-xl font-medium text-center p-4 m-4">
          You have nothing in your cart!
        </h1>
      )}
      <hr />
      <div className="flex flex-wrap justify-around sm:p-4 p-2">
        <button className="sm:p-4 p-2 sm:text-lg text-sm rounded bg-red text-white" onClick={(e) => emptyCart(setCart, setTotalPrice, e)}>Empty</button>
        <h1 className="sm:p-4 p-2 sm:text-lg text-sm  sm:font-semibold">Subtotal ({cartData.length === 1 ? `${cartData.length} item` : `${cartData.length} items`}): <span className="font-semibold">${totalPrice}</span></h1>
        <button className="sm:p-4 p-2 sm:text-lg text-sm  rounded bg-blue text-white"><Link to='/checkout' onClick={handleCc}>Checkout</Link></button>
      </div>
    </div>
  );
};

export default Modal;
