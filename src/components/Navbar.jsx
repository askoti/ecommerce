import { useContext, useState } from "react";
import logo from "../assets/shopping.png";
import {
  IoCart,
  IoBookmark,
  IoCaretDown,
  IoCaretUp,
  IoSearchOutline,
} from "react-icons/io5";
import { Products } from "../context/Products";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import CategoriesModal from "./CategoriesModal";

const Navbar = () => {
  const [category, setCategory] = useState(false);
  const { search, setSearch, cart, isCartOpen, setIsCartOpen, handleSearch } =
    useContext(Products);

  return (
    <>
      <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-20">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-4 w-1/2">
          <Link to="/" className="shrink-0">
            <img src={logo} alt="Shop Logo" className="w-16" />
          </Link>
          <div className="flex w-full max-w-md">
            <input
              className="flex-1 px-4 py-2 border border-gray-light rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search for a product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              disabled={!search}
              className={`px-4 py-2 rounded-r-lg text-xl flex items-center justify-center transition ${
                search
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray cursor-not-allowed"
              }`}
              onClick={handleSearch}
            >
              <IoSearchOutline />
            </button>
          </div>
        </div>

        {/* Middle: Nav links */}
        <ul className="hidden md:flex gap-8 items-center font-sans text-sm md:text-base">
          <li>
            <Link
              to="/"
              className="px-3 py-2 uppercase font-medium tracking-wide hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>

          {/* Categories with caret */}
          <li className="relative">
            <button
              onClick={() => setCategory(!category)}
              className="flex items-center gap-1 px-3 py-2 uppercase font-medium tracking-wide hover:text-blue-600 transition"
            >
              Categories {category ? <IoCaretUp /> : <IoCaretDown />}
            </button>

            {category && (
              <div className="absolute left-0 top-full mt-2 w-60">
                <CategoriesModal setCategory={setCategory} />
              </div>
            )}
          </li>

          <li>
            <Link
              to="/about"
              className="px-3 py-2 uppercase font-medium tracking-wide hover:text-blue-600 transition"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Right: Icons */}
        <div className="flex items-center gap-6">
          <button
            className="relative text-3xl text-gray-dark hover:text-blue-600 transition"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <IoCart />
            {cart > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center text-xs font-bold text-white bg-black rounded-full">
                {cart}
              </span>
            )}
          </button>
          <button className="text-3xl text-gray-dark hover:text-blue-600 transition">
            <IoBookmark />
          </button>
        </div>
      </nav>

      {isCartOpen && <Modal />}
    </>
  );
};

export default Navbar;
