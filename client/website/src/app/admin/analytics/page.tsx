import AdminSidenavV2 from "@/components/adminPage/AdminSednavV2";
import AnalyticsDash from "@/components/adminPage/AnalyticsDash";
import AdminContainer from "@/containers/AdminContainer";
import React from "react";
import type { Metadata } from "next";

export const metadata = { title: `Admin | Dashboard` } satisfies Metadata;
const index = () => {
  return (
    <AdminContainer>
      <div style={{ display: "flex" }}>
        <AdminSidenavV2 activePage="dashboard" />
        <AnalyticsDash />
      </div>
    </AdminContainer>
  );
};

export default index;
