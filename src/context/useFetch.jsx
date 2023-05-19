import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchData = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
      setData(data);
      setLoading(false);
      setError("");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return { data, loading, error };
};

export default useFetch;
