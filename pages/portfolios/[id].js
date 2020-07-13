import React from "react";
import { withRouter, useRouter } from "next/router";
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layout/BaseLayout";
import { useGetPostById } from "@/actions";

const Portfolio = () => {
  const router = useRouter();
  const {data, error, loading} = useGetPostById(router.query.id);
  debugger;
  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading...</p>}
        {error ? <div className="alert alert-danger">{error.message}</div> : ""}
        {data && (
          <>
            <h1>{data.title}</h1>
            <p>BODY: {data.body}</p>
            <p>ID: {data.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
