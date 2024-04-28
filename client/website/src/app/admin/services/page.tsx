import AdminSidenavV2 from "@/components/adminPage/AdminSidenavV2";
import ServicesTable from "@/components/adminPage/ServicesTable";
import AdminContainer from "@/containers/AdminContainer";
import React from "react";
import type { Metadata } from "next";

export const metadata = { title: `Admin | Services` } satisfies Metadata;
const index = () => {
  return (
    <AdminContainer>
      <div style={{ display: "flex" }}>
        <AdminSidenavV2 activePage="services" />
        <ServicesTable />
      </div>
    </AdminContainer>
  );
};

export default index;
