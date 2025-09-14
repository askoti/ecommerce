import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <div className="flex flex-col items-center text-center px-6 py-12 flex-grow">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          About Us
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
          Welcome to our ecommerce website! Our company was founded in 2021 with
          the goal of making it easy for people to buy high-quality products
          online. We believe that everyone should have access to affordable and
          convenient shopping options, and we're proud to offer a wide range of
          products to suit all tastes and budgets.
        </p>
        <p className="max-w-3xl text-base sm:text-lg text-gray-600 leading-relaxed text-justify mt-4">
          Our mission is to provide our customers with an exceptional online
          shopping experience. Whether you're looking for the latest fashion
          trends, high-tech gadgets, or everyday household essentials, we've got
          you covered. Our ecommerce website is designed to be user-friendly and
          intuitive, so you can easily find what you're looking for and place
          your order with confidence.
        </p>
        <p className="max-w-3xl text-base sm:text-lg text-gray-600 leading-relaxed text-justify mt-4">
          At our company, we're committed to delivering exceptional value to our
          customers. We source our products from trusted suppliers around the
          world and offer them at competitive prices. We also provide fast and
          reliable shipping options, so you can get your products delivered
          right to your doorstep. Our team is made up of passionate and
          dedicated professionals who are committed to providing the best
          possible service.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
