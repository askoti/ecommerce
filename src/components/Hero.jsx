import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FirstPic from "../assets/pic1.png";
import SecondPic from "../assets/pic2.png";
import ThirdPic from "../assets/pic3.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Products } from "../context/Products";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import loading_gif from '../assets/loading.gif'

const Hero = () => {
  const { loading, products, error, limit, setLimit, nav } =
    useContext(Products);
  console.log(products);

  if (loading) {
    <h1>Loading...</h1>
  }

  return (
    <div className="flex flex-col z-0">
          <center>
            <div className="m-0 sm:p-2 xl:w-12/12">
              <Carousel
                interval={5000}
                autoPlay
                infiniteLoop
                centerMode
                dynamicHeight
                emulateTouch
              >
                <div>
                  <img src={FirstPic} className="brightness-95" />
                </div>
                <div>
                  <img src={SecondPic} className="brightness-95" />
                </div>
                <div>
                  <img src={ThirdPic} className="brightness-95" />
                </div>
              </Carousel>
            </div>
            <button className="flex align-baseline p-4 m-2 bg-gray-dark text-white text-lg rounded font-bold">
              Shop Now{" "}
              <span className="mt-1 ml-2 text-xl">
                <IoArrowForwardCircleSharp />
              </span>
            </button>
          </center>
        <div className="flex flex-row flex-wrap p-0 justify-center -z-0">
          {products?.products.length ? (
            products?.products?.map((item) => (
                <div
                  className="w-5/12 xl:w-2/12 md:w-3/12 text-center shadow border-gray-light p-1 m-4 rounded"
                  key={item.id}
                >
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item?.thumbnail}
                      alt=""
                      className="h-40 object-contain"
                    />
                    <hr />
                    <p className="sm:text-xl sm:font-semibold font-medium mt-2">{item?.title}</p>
                    <h1 className="sm:text-lg sm:font-medium">${item?.price}</h1>
                  </Link>
                </div>

            ))
            ) : (
              <h1 className="text-5xl font-bold m-10 p-4 ">
              Couldn't find nothing
            </h1>
          )}
        </div>
        {loading ? <div className="flex justify-center align-middle"><img src={loading_gif} className="w-1/ h-1/10" alt="" /></div> : null}
      <Footer />
    </div>
  );
};

export default Hero;
