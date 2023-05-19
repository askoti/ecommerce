import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Products = createContext();


// https://dummyjson.com/products/search?q=phone
const ProductsContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(15);
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0);
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get( `https://dummyjson.com/products?limit=${limit}`);
      setProducts(data);
      setLoading(false);
      setError("");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const deleteProductFromModal = (data, id) => {
    data = data.filter(item => item.id !== id)
  }

  const handleSearch = () => {
    navigate(`/search/${search}`)
    setSearch('')
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setLoading(true)
      setLimit(prev => prev + 10)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    getProducts();
  }, [limit]);

  return (
    <Products.Provider value={{ loading, products, error, limit, setLimit, nav, setNav, cart, setCart, isCartOpen, setIsCartOpen, deleteProductFromModal, totalPrice, setTotalPrice, search, setSearch, handleSearch }}>
      {children}
    </Products.Provider>
  );
};

export default ProductsContext;
