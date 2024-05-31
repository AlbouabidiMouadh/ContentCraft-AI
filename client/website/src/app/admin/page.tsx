import * as React from "react";
import type { Metadata } from "next";
import AdminContainer from "@/containers/AdminContainer";
import AdminSidenavV2 from "@/components/adminPage/AdminSidenavV2";
import AnalyticsDash from "@/components/adminPage/AnalyticsDash";

export const metadata = { title: `Admin | Dashboard` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <AdminContainer>
      <div style={{ display: "flex" }}>
        <AdminSidenavV2 activePage="dashboard" />
        <AnalyticsDash />
      </div>
    </AdminContainer>
  );
}
