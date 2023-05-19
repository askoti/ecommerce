import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchSearch = (search) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
      setData(data.products);
      setLoading(false);
      setError("");
    } catch (err) {
      setLoading(false);
      setError(err);
      console.log('search----' + err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [search]);

  return { data, loading, error };
};

export default useFetchSearch;
