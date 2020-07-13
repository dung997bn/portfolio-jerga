import React, { Component, useEffect, useState } from "react";
import BaseLayout from "@/components/layout/BaseLayout";
import Link from "next/link";
import BasePage from "@/components/BasePage";
import { useGetPosts } from "@/actions";

const Portfolios = () => {
  const [portfolios, error] = useGetPosts();
  return (
    <BaseLayout>
      <BasePage>
        <h1>Port folio</h1>
        <ul>
          {portfolios &&
            portfolios.map((p) => (
              <li key={p.id} style={{ fontSize: "20px" }}>
                <Link href={`/portfolios/[id]`} as={`/portfolios/${p.id}`}>
                  <a>{p.title}</a>
                </Link>
              </li>
            ))}
            {/* {
              error && <div className="alert alert-danger">{error.message}</div>
            } */}
        </ul>
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolios;
