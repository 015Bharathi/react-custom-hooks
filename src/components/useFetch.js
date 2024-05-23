import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        setData(data);
        setLoading(false);
        // console.log('useEffect');
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;
