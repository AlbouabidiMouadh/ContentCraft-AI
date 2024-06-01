"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import AdminSidenavV2 from "@/components/adminPage/AdminSidenavV2";
import UsersTable from "@/components/adminPage/UsersTable";
import AdminContainer from "@/containers/AdminContainer";

const AdminUsers = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAdminSession = () => {
      const adminSession = Cookies.get("adminSession");
      if (!adminSession) {
        router.push("/auth/login");
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAdminSession();
  }, [router]);

  const handleLogOut = () => {
    Cookies.remove("adminSession");
    router.push("/auth/login");
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <AdminContainer>
      <div style={{ display: "flex" }}>
        <AdminSidenavV2 activePage="users" handleLogOut={handleLogOut} />
        <UsersTable />
      </div>
    </AdminContainer>
  );
};

export default AdminUsers;
