import React, { Component } from "react";
import BaseLayout from "@/components/layout/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";

const Secret = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>Hello - {user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(Secret)('admin');
