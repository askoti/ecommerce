import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchCategory = (category) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchData = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get(`https://dummyjson.com/products/category/${category}`);
      setData(data.products);
      setLoading(false);
      setError("");
    } catch (err) {
      setLoading(false);
      setError(err);
      console.log('xatecogy error' + err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  return { data, loading, error };
};

export default useFetchCategory;
