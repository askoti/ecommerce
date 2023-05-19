import React, { useRef } from "react";
import { useContext } from "react";
import { Products } from "../context/Products";
import { cartData } from "../data";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const { totalPrice, setCart, setTotalPrice } = useContext(Products);
  const tax = totalPrice % 99;
  const form = useRef();
  let navigate = useNavigate()
  
  const sendEmail = async(e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bpya9hc",
        "template_xngbp7j",
        form.current,
        "h_EcXJVVw6uu3Z0-H"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
      navigate('/')
      await form.current.reset()
      setCart(0)
      setTotalPrice(0)
      cartData.splice(0, cartData.length); // This will delete all the elements in the array
  };

  console.log(cartData);

  return (
    <>
      <div className="p-4 flex flex-wrap w-full justify-between">
        <div className="md:w-1/2">
          <h1 className="text-2xl p-4 font-serif font-semibold">
            Payment Details
          </h1>
          <form
            action=""
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-evenly p-4"
          >
            <label htmlFor="email" className="font-thin">
              Email Address
            </label>
            <input
              type="email"
              name="form_email"
              className="border p-3 rounded my-3 sm:w-full w-11/12"
              placeholder="youremail@something.com"
              required
            />
            <label htmlFor="email" className="font-thin">
              Name
            </label>
            <input
              type="text"
              name="form_name"
              className="border p-3 rounded my-3 sm:w-full w-11/12"
              placeholder="Name"
              required
            />
            <label htmlFor="phone" className="font-thin">
              Phone Number
            </label>
            <input
              type="phone"
              name="from_number"
              className="border p-3 rounded my-3 sm:w-full w-11/12"
              placeholder="+223-2425-2567"
              required
            />
            <label htmlFor="" className="font-thin mx-0">
              Country
            </label>
            <input
              type="text"
              name="country"
              placeholder="USA"
              className="border p-3 rounded my-3 sm:w-full w-11/12"
            />

            <label htmlFor="" className="font-thin mx-0">
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="New York"
              className="border p-3 rounded my-3 sm:w-full w-11/12"
            />

            <div className="w-full flex flex-wrap justify-between align-baseline my-4">
              <label htmlFor="expdate" className="font-thin my-4">
                Street:
              </label>
              <input
                type="text"
                placeholder="East 6 Street"
                name="street"
                className="border p-3 my-1 sm:mx-3 mx-6 rounded  sm:w-1/4 w-2/4"
                required
              />
              <label htmlFor="cvv" className="font-thin my-4 mx-0">
                Zip Code:
              </label>
              <input
                type="number"
                className="border p-3 rounded sm:w-2/5 w-3/6 sm:mx-3 mx-6 my-2"
                name="zipcode"
                placeholder="00000"
                required
              />
            </div>
            <textarea
              readOnly
              name="message"
              className="mt-6 bg-white hover:border-none"
              id=""
              defaultValue={cartData.map((item) => {
                return `${item?.title} - ${item?.quantity}`;
              })}
            ></textarea>

            <h2 className="flex flex-row justify-between my-2 font-thin">
              Subtotal: <span>${totalPrice}</span>
            </h2>
            <h2 className="flex flex-row justify-between my-2 font-thin">
              Tax: <span>${tax}</span>
            </h2>
            <hr />

            <h2 className="flex flex-row justify-between my-8 font-thin">
              Total Amount:{" "}
              <span>
                <input
                  className="border-none text-right"
                  type=""
                  readOnly
                  defaultValue={`$${totalPrice + tax}`}
                  name="total_amount"
                />
              </span>
            </h2>

            <button
              className="bg-purple p-3 rounded-lg text-white"
              type="submit"
            >
              Order
            </button>
          </form>
        </div>
        <div className="w-1/2 hidden md:inline">
          <img src="https://co-well.vn/wp-content/uploads/2019/12/what-is-checkout-page.png" alt="fwafa" className="h-screen md:w-full object-cover"/>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
