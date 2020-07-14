import React, { Component, useEffect, useState } from "react";
import useSWR from "swr";
export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });
export const useGetPosts = () => {
  const { data, error, ...rest } = useSWR("/api/v1/portfolios", fetcher);
  return { data, error, loading: !data && !error, ...rest };
};
export const useGetPostById = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/portfolios/${id}` : null,
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};
