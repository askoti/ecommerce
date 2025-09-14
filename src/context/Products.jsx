import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartData } from "../data";

export const Products = createContext();

const ProductsContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();

  const getProducts = async () => {
    setLoading(true);
    try {
      const skip = (page - 1) * limit;
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      setProducts(data.products);
      setTotal(data.total);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProductFromModal = (data, id) => {
    data = data.filter((item) => item.id !== id);
    setProducts(data);
  };

  const handleSearch = () => {
    navigate(`/search/${search}`);
    setSearch("");
  };

  const handleCc = () => {
    setIsCartOpen(false);
    setNav(false);
  };

  useEffect(() => {
    getProducts();
  }, [page, limit]);

  return (
    <Products.Provider
      value={{
        loading,
        products,
        error,
        limit,
        setLimit,
        page,
        setPage,
        total,
        nav,
        setNav,
        cart,
        setCart,
        isCartOpen,
        setIsCartOpen,
        deleteProductFromModal,
        totalPrice,
        setTotalPrice,
        search,
        setSearch,
        handleSearch,
        handleCc,
        size,
        setSize,
        scrollY,
        setScrollY,
      }}
    >
      {children}
    </Products.Provider>
  );
};

export default ProductsContext;
