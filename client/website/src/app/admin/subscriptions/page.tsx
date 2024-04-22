import AdminSidenavV2 from "@/components/adminPage/AdminSednavV2";
import SubscriptionsTable from "@/components/adminPage/SubscriptionsTable";
import AdminContainer from "@/containers/AdminContainer";
import React from "react";
import type { Metadata } from "next";

export const metadata = { title: `Admin | Subscriptions` } satisfies Metadata;
const index = () => {
  return (
    <AdminContainer>
      <div style={{ display: "flex" }}>
        <AdminSidenavV2 activePage="subscriptions" />
        <SubscriptionsTable />
      </div>
    </AdminContainer>
  );
};

export default index;
