"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import AdminSidenavV2 from "@/components/adminPage/AdminSidenavV2";
import ServicesTable from "@/components/adminPage/ServicesTable";
import AdminContainer from "@/containers/AdminContainer";
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress component

const AdminServices = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAdminSession = () => {
      const adminSession = Cookies.get('adminSession');
      if (!adminSession) {
        router.push('/auth/admin/login');
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAdminSession();
  }, [router]);

  const handleLogOut = () => {
    Cookies.remove("adminSession");
    router.push("/auth/admin/login");
  };

  if (!isAuthenticated) {
    // Render CircularProgress while loading
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <AdminContainer>
      <div style={{ display: "flex" }}>
        <AdminSidenavV2 activePage="services" handleLogOut={handleLogOut} />
        <ServicesTable />
      </div>
    </AdminContainer>
  );
};

export default AdminServices;
