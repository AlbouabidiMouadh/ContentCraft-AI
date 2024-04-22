import AdminSidenavV2 from "@/components/adminPage/AdminSednavV2";
import UsersTable from "@/components/adminPage/UsersTable";
import AdminContainer from "@/containers/AdminContainer";
import React from "react";

import type { Metadata } from "next";

export const metadata = { title: `Admin | Users` } satisfies Metadata;

const index = () => {
  return (
    <AdminContainer>
      <div style={{ display: "flex" }}>
        <AdminSidenavV2 activePage="users" />
        <UsersTable />
      </div>
    </AdminContainer>
  );
};

export default index;
