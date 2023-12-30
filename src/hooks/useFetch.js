import React, { useEffect, useState } from "react";
import { fetchDtataFromApi } from "../api/api";

const useFetch = endpoint => {
  const [data, setData] = useState();

  useEffect(
    () => {
      apiCall();
    },
    [endpoint]
  );

  const apiCall = async () => {
    const res = await fetchDtataFromApi(endpoint);
    setData(res);
  };
  return { data };
};

export default useFetch;

