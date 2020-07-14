import React, { Component } from "react";
import BaseLayout from "@/components/layout/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { useRouter } from "next/router";
import Redirect from "@/components/shared/Redirect";

const Secret = () => {
  const { data, loading } = useGetUser();
  const router = useRouter();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <Redirect to="/api/v1/login" />;
  } else {
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>This is Secret page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
};

export default Secret;
