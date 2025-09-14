import React from "react";
import Footer from "./Footer";
import { FaShippingFast, FaRegSmile, FaShoppingCart } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Content */}
      <div className="flex flex-col items-center text-center px-6 py-16 flex-grow">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
          About Us
        </h1>
        <p className="max-w-3xl text-lg text-gray-600 leading-relaxed text-justify mb-6">
          Welcome to <span className="font-semibold text-gray-800">Ecommerce-23</span> — your
          trusted destination for high-quality products online. Since our
          founding in 2021, our mission has been simple: to make shopping
          convenient, affordable, and enjoyable for everyone.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl w-full mt-8">
          {/* Fast Shipping */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <FaShippingFast className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast & Reliable Shipping</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get your products delivered quickly and safely to your doorstep.
            </p>
          </div>

          {/* Customer Happiness */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <FaRegSmile className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Customer Satisfaction</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are committed to providing a delightful shopping experience
              and top-notch customer support.
            </p>
          </div>

          {/* Wide Product Selection */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <FaShoppingCart className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Wide Product Range</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore a variety of products carefully curated to suit all
              tastes and budgets.
            </p>
          </div>
        </div>

        <p className="max-w-3xl text-lg text-gray-600 leading-relaxed text-justify mt-12">
          Our team of passionate professionals ensures that every order is
          handled with care, and every customer is valued. At <span className="font-semibold text-gray-800">Ecommerce-23</span>, we combine quality, convenience, and affordability so you can shop confidently and enjoyably.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
