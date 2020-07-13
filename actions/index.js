import React, { Component, useEffect, useState } from "react";

export const useGetPosts = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    async function getPosts() {
      const res = await fetch("/api/v1/portfolios");
      const result = await res.json();

      if (res.status != 200) {
        setError(result);
      } else {
        setPortfolios(result);
      }
    }

    getPosts();
  }, []);
  return [portfolios, error];
};
