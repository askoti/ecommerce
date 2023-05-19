import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { categories } from "../data";
import logo from "../assets/shopping.png";
import { IoCart, IoBookmark, IoCaretDown, IoCaretUp, IoSearchOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { Products } from "../context/Products";
import Modal from "./Modal";

const Sidebar = () => {
  const [category, setCategory] = useState(false);
  const { search, setSearch, nav, setNav, isCartOpen, setIsCartOpen, cart, handleSearch } =
    useContext(Products);

  const handleNs = () => {
    setNav(false)
  }

  const cartHandle = () => {
    setIsCartOpen(true)
    setNav(false)
  }
  return (
    <>
      <Fade top>
        <div>
          <div className="flex flex-row justify-evenly p-4">
            <Link to='/' onClick={() => setNav(false)}>
              <img src={logo} alt="" className="sm:w-5/12 p-3 md:w-5/12 w-16" />
            </Link>
            <input
              type="search"
              className="p-4 -ml-1 sm:mr-40 md:mt-10 mt-3 sm:mx-0 mx-6 w-44 align-middle border rounded h-3"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search === "" || null ? (
              <button
                disabled
                className="p-4 mt-3 -ml-5 border rounded h-5 text-md align-top"
                onClick={() => handleSearch()}
              >
                <IoSearchOutline className="-mt-2" />
              </button>
            ) : (
              <button
                className="p-4 mt-3 -ml-5 border rounded h-5 text-md align-top"
                onClick={() => handleSearch()}
              >
                <IoSearchOutline className="-mt-2" />
              </button>
            )}
            <button className="p-2 text-xl" onClick={() => setNav(!nav)}>
              {nav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <Fade right>
            <div
              className={
                nav
                  ? "flex flex-row flex-wrap justify-between mt-5  w-full p-4 bg-white z-50 shadow bg-opacity-100"
                  : "hidden z-0"
              }
            >
              <ul>
                <li className="p-4">
                  <Link to="/" onClick={() => setNav(false)} className="uppercase font-medium tracking-wider">
                    Home
                  </Link>
                </li>
                <li className="p-4">
                  {" "}
                  <button onClick={() => setCategory(!category)} className="flex flex-row uppercase font-medium tracking-wider">
                    Categories{" "}
                    <span className="-mt-2 p-3 uppercase font-medium tracking-wider">
                      {category ? <IoCaretDown /> : <IoCaretUp />}
                    </span>
                  </button>
                  {category ? (
                    <ul>
                      {categories.map(({ name, href, index }) => (
                        <li key={index} className="p-2 uppercase font-medium tracking-wider">
                          <Link to={`/categories/${href}`} onClick={handleNs}>{name}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
                <li className="p-4 ">
                  <Link to="/about" onClick={() => setNav(false)} className="uppercase font-medium tracking-wider">
                    About us
                  </Link>
                </li>
              </ul>
              <div className={nav ? "flex flex-col" : "hidden"}>
                <button
                  className="m-8 text-3xl relative"
                  onClick={cartHandle}
                >
                  <IoCart />{" "}
                  <span className="absolute w-8 left-4 bottom-3 text-white bg-gray-dark rounded-full p-2 text-sm">
                    {cart}
                  </span>
                </button>
                <button className="m-8 text-3xl">
                  <IoBookmark />
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
      {isCartOpen ? <Modal /> : null}
    </>
  );
};

export default Sidebar;
