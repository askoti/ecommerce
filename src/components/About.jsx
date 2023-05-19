import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="flex flex-center flex-col">
      <h1 className="sm:text-4xl text-3xl font-bold p-4 my-4 text-center">About Us</h1>
      <p className="sm:w-2/3 w-10/12 mx-auto sm:text-xl  text-justify font-medium tracking-wide sm:leading-8">
        Welcome to our ecommerce website! Our company was founded in 2021 with
        the goal of making it easy for people to buy high-quality products
        online. We believe that everyone should have access to affordable and
        convenient shopping options, and we're proud to offer a wide range of
        products to suit all tastes and budgets. Our mission is to provide our
        customers with an exceptional online shopping experience. Whether you're
        looking for the latest fashion trends, high-tech gadgets, or everyday
        household essentials, we've got you covered. Our ecommerce website is
        designed to be user-friendly and intuitive, so you can easily find what
        you're looking for and place your order with confidence. At our company,
        we're committed to delivering exceptional value to our customers. We
        source our products from trusted suppliers around the world and offer
        them at competitive prices. We also offer fast and reliable shipping
        options, so you can get your products delivered right to your doorstep.
        Our team is made up of passionate and dedicated professionals who are
        committed to providing the best possible service to our customers.
      </p>
      <Footer />
    </div>
  );
};

export default About;
