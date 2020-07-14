import React, { Component, useEffect, useState } from "react";
import BaseLayout from "@/components/layout/BaseLayout";
import Link from "next/link";
import BasePage from "@/components/BasePage";
import { useGetPosts } from "@/actions";
import { useGetUser } from "@/actions/user";

const Portfolios = () => {
  const { data, error, loading } = useGetPosts();
  const { data:dataUser, loading:loadingUser } = useGetUser();
  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage>
        {loading && <p>Loading...</p>}
        <ul>
          {data &&
            data.map((p) => (
              <li key={p.id} style={{ fontSize: "20px" }}>
                <Link href={`/portfolios/[id]`} as={`/portfolios/${p.id}`}>
                  <a>{p.title}</a>
                </Link>
              </li>
            ))}
          {error && <div className="alert alert-danger">{error.message}</div>}
        </ul>
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolios;
