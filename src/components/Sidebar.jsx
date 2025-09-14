import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { categories } from "../data";
import logo from "../assets/shopping.png";
import {
  IoCart,
  IoBookmark,
  IoCaretDown,
  IoCaretUp,
  IoSearchOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { Products } from "../context/Products";
import Modal from "./Modal";

const Sidebar = () => {
  const [category, setCategory] = useState(false);
  const { search, setSearch, nav, setNav, isCartOpen, setIsCartOpen, cart, handleSearch } =
    useContext(Products);

  const handleNs = () => setNav(false);
  const cartHandle = () => {
    setIsCartOpen(true);
    setNav(false);
  };

  return (
    <>
      {/* Sticky Top Navbar */}
      <div className="sticky top-0 z-50 flex justify-between items-center p-4 border-b shadow-sm bg-white">
        {/* Logo */}
        <Link to="/" onClick={() => setNav(false)}>
          <img src={logo} alt="Shop Logo" className="w-14 sm:w-16" />
        </Link>

        {/* Search */}
        <div className="flex items-center w-2/3 max-w-sm">
          <input
            type="search"
            className="flex-1 px-4 py-2 border rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            disabled={!search}
            onClick={handleSearch}
            className={`px-4 py-2 rounded-r-lg text-lg flex items-center justify-center ${
              search
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray cursor-not-allowed"
            }`}
          >
            <IoSearchOutline />
          </button>
        </div>

        {/* Menu Toggle */}
        <button
          className="ml-4 text-2xl text-gray-dark"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sliding Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-20">
          <div>
            <Link to="/" onClick={handleNs} className="block px-6 mb-6">
              <img src={logo} alt="Logo" className="w-28" />
            </Link>

            <ul className="flex flex-col divide-y">
              <li className="px-6 py-3 hover:bg-gray-100">
                <Link to="/" onClick={handleNs} className="uppercase font-semibold">
                  Home
                </Link>
              </li>

              <li className="px-6 py-3 hover:bg-gray-100">
                <button
                  onClick={() => setCategory(!category)}
                  className="flex justify-between items-center w-full uppercase font-semibold"
                >
                  Categories {category ? <IoCaretUp /> : <IoCaretDown />}
                </button>
                {category && (
                  <ul className="pl-4 mt-2 space-y-2 border-l">
                    {categories.map(({ name, href, index }) => (
                      <li key={index}>
                        <Link
                          to={`/categories/${href}`}
                          onClick={handleNs}
                          className="block py-1 text-sm uppercase hover:text-blue-600"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="px-6 py-3 hover:bg-gray-100">
                <Link
                  to="/about"
                  onClick={handleNs}
                  className="uppercase font-semibold"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Cart + Bookmark */}
          <div className="flex justify-around items-center p-6 border-t">
            <button onClick={cartHandle} className="relative text-3xl">
              <IoCart className="text-gray-dark hover:text-blue-600 transition" />
              {cart > 0 && (
                <span className="absolute -top-2 -right-3 w-6 h-6 flex items-center justify-center text-xs font-bold text-white bg-black rounded-full">
                  {cart}
                </span>
              )}
            </button>

            <button className="text-3xl text-gray-dark hover:text-blue-600 transition">
              <IoBookmark />
            </button>
          </div>
        </div>
      </aside>

      {isCartOpen && <Modal />}
    </>
  );
};

export default Sidebar;
