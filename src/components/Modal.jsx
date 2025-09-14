import React, { useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Products } from "../context/Products";
import { cartData, deletePFM, emptyCart } from "../data";
import { Link } from "react-router-dom";
import { formatPrice } from "../context/formatPrice";

const Modal = () => {
  const { setIsCartOpen, cart, setCart, totalPrice, setTotalPrice, handleCc } =
    useContext(Products);

  useEffect(() => {
    const arr = cartData.map((item) => item.price * item.quantity);
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(totalSum);
  }, [cart, setTotalPrice]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative sm:w-2/3 w-11/12 bg-white border rounded-xl shadow-xl p-6 overflow-y-auto max-h-[80vh]">
        <button
          className="absolute top-3 right-3 p-2 bg-brand-red text-white rounded-full shadow-md hover:scale-105 transition-transform"
          onClick={() => setIsCartOpen(false)}
        >
          <FaTimes />
        </button>

        <h1 className="sm:text-3xl text-xl font-bold mb-4">🛒 Shopping Cart</h1>
        <hr className="mb-4" />

        {cartData.length ? (
          <div className="space-y-4">
            {cartData.map((data) => (
              <div
                className="flex flex-row justify-between items-center bg-gray-light/20 rounded-lg p-4"
                key={data?.id}
              >
                <div className="flex items-center gap-4">
                  <div className="sm:w-28 w-20">
                    <img
                      src={data?.image}
                      alt={data?.title}
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                  <div>
                    <h1 className="sm:text-lg text-sm font-semibold text-gray-dark">
                      {data?.title}
                    </h1>
                    <p className="text-gray text-sm">
                      Quantity: {data?.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    className="px-4 py-2 text-xs sm:text-sm font-medium bg-brand-red text-white rounded-lg shadow hover:bg-red-600 transition"
                    onClick={(e) =>
                      deletePFM(
                        data?.id,
                        cart,
                        setCart,
                        setTotalPrice,
                        totalPrice,
                        data?.price * data?.quantity,
                        e
                      )
                    }
                  >
                    Delete
                  </button>
                  <h1 className="font-semibold text-gray-dark">
                    ${formatPrice(data?.price * data?.quantity)}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="sm:text-2xl text-lg font-medium text-center p-6">
            Your cart is empty 🛍️
          </h1>
        )}

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between items-center gap-4">
          <button
            className="px-5 py-3 text-sm sm:text-base rounded-lg bg-brand-red text-white shadow-md hover:bg-red-600 transition"
            onClick={(e) => emptyCart(setCart, setTotalPrice, e)}
          >
            Empty Cart
          </button>
          <h1 className="text-sm sm:text-lg font-semibold text-gray-dark">
            Subtotal ({cartData.length} items): <span>${formatPrice(totalPrice)}</span>
          </h1>
          <Link
            to="/checkout"
            onClick={handleCc}
            className="px-5 py-3 text-sm sm:text-base rounded-lg bg-brand-blue text-white shadow-md hover:bg-blue-600 transition"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
