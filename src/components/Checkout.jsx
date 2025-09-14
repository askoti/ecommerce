import React, { useRef, useContext } from "react";
import { Products } from "../context/Products";
import { cartData } from "../data";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../context/formatPrice";

const Checkout = () => {
  const { totalPrice, setCart, setTotalPrice } = useContext(Products);
  const tax = totalPrice % 99;
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bpya9hc",
        "template_xngbp7j",
        form.current,
        "h_EcXJVVw6uu3Z0-H"
      )
      .then(
        (result) => console.log(result),
        (error) => console.log(error)
      );

    navigate("/");
    await form.current.reset();
    setCart(0);
    setTotalPrice(0);
    cartData.splice(0, cartData.length); // Clear cart
  };

  return (
    <>
      <div className="flex flex-wrap w-full p-6 md:p-12 justify-between">
        {/* Form Section */}
        <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold mb-6 text-gray-800">
            Payment Details
          </h1>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                name="form_email"
                className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="youremail@something.com"
                required
              />
            </div>

            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="form_name"
                className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                type="tel"
                name="from_number"
                className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="+223-2425-2567"
                required
              />
            </div>

            {/* Country & City */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="text-sm text-gray-600">Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="USA"
                  className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-600">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="New York"
                  className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Street & Zip */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="text-sm text-gray-600">Street</label>
                <input
                  type="text"
                  name="street"
                  placeholder="East 6 Street"
                  className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-600">Zip Code</label>
                <input
                  type="number"
                  name="zipcode"
                  placeholder="00000"
                  className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Cart Summary */}
            <textarea
              readOnly
              name="message"
              className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 mt-4"
              defaultValue={cartData.map((item) => `${item?.title} - ${item?.quantity}`).join("\n")}
            ></textarea>

            {/* Price Summary */}
            <div className="mt-4">
              <h2 className="flex justify-between text-gray-600">
                Subtotal: <span>${formatPrice(totalPrice)}</span>
              </h2>
              <h2 className="flex justify-between text-gray-600">
                Tax: <span>${formatPrice(tax)}</span>
              </h2>
              <hr className="my-3" />
              <h2 className="flex justify-between font-semibold text-lg text-gray-800">
                Total Amount:{" "}
                <input
                  className="border-none bg-transparent text-right font-semibold w-24"
                  type="text"
                  readOnly
                  value={`$${formatPrice(totalPrice + tax)}`}
                  name="total_amount"
                />
              </h2>
            </div>

            {/* Submit */}
            <button
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg shadow-md transition"
              type="submit"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Side Image */}
        <div className="hidden md:block md:w-1/2 pl-8">
          <img
            src="https://co-well.vn/wp-content/uploads/2019/12/what-is-checkout-page.png"
            alt="Checkout Illustration"
            className="h-full w-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
