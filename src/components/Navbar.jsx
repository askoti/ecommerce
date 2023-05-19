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
        <nav className="flex flex-row justify-between p-4 shadow-md">
          <div className="flex flex-row justify-start ml-0">
            <Link to="/">
              <img src={logo} alt="" className="w-20 p-2 m-0 align-middle " />
            </Link>
            <input
              className="p-4 w-8/12 h-10 mt-5 ml-4 border rounded-l-md"
              type="text"
              placeholder="Search for a product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search === "" || null ? (
              <button
                disabled
                className="p-4 mt-5 mx-4 border rounded h-10 text-xl align-top"
                onClick={() => handleSearch()}
              >
                <IoSearchOutline className="-mt-2" />
              </button>
            ) : (
              <button
                className="p-4 mt-5 mx-4 border rounded h-10 text-xl align-top"
                onClick={() => handleSearch()}
              >
                <IoSearchOutline className="-mt-2" />
              </button>
            )}
          </div>
          <div className="flex flex-row justify-start mt-3">
            <ul className="flex flex-row justify-center ">
              <li className="p-4 ">
                <Link to="/" className="uppercase font-medium tracking-wider">
                  Home
                </Link>
              </li>
              <li className="p-4 flex flex-row -mt-2">
                {" "}
                <button
                  onClick={() => setCategory(!category)}
                  className="uppercase font-medium tracking-wider"
                >
                  Categories
                </button>
                <span className="m-0 p-3">
                  {category ? <IoCaretDown /> : <IoCaretUp />}
                </span>
              </li>
              <li className="p-4 ">
                <Link
                  to="/about"
                  className="uppercase font-medium tracking-wider"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-start mr-12">
            <button
              className="m-2 text-3xl relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <IoCart />{" "}
              <span className="absolute bottom-7 left-3 w-8 text-white bg-gray-dark rounded-full p-2 text-sm">
                {cart}
              </span>
            </button>
            <button className="m-2 text-3xl">
              <IoBookmark />
            </button>
          </div>
        </nav>
      {category ? <CategoriesModal setCategory={setCategory} /> : null}
      {isCartOpen ? <Modal /> : null}
    </>
  );
};

export default Navbar;
