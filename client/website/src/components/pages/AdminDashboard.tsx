"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import AdminContainer from "@/containers/AdminContainer";
import AdminSidenavV2 from "@/components/adminPage/AdminSidenavV2";
import AnalyticsDash from "@/components/adminPage/AnalyticsDash";
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress component

const AdminDashboard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    const checkAdminSession = () => {
      const adminSession = Cookies.get("adminSession");
      if (!adminSession) {
        router.push("/auth/admin/login");
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false); // Set isLoading to false after checking session
    };

    checkAdminSession();
  }, [router]);

  const handleLogOut = () => {
    Cookies.remove("adminSession");
    router.push("/auth/admin/login");
  };

  if (!isAuthenticated || isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <AdminContainer>
      <div style={{ display: "flex" }}>
        <AdminSidenavV2 activePage="dashboard" handleLogOut={handleLogOut} />
        <AnalyticsDash />
      </div>
    </AdminContainer>
  );
};

export default AdminDashboard;
