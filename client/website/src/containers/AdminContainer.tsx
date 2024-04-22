import AdminFooter from "@/components/adminPage/AdminFooter";
import AdminHeader from "@/components/adminPage/AdminHeader";
import AdminSidenavV2 from "@/components/adminPage/AdminSednavV2";
import React from "react";

const AdminContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      {children}
      <AdminFooter />
    </div>
  );
};

export default AdminContainer;
