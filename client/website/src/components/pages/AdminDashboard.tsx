"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import AdminContainer from "@/containers/AdminContainer";
import AdminSidenavV2 from "@/components/adminPage/AdminSidenavV2";
import AnalyticsDash from "@/components/adminPage/AnalyticsDash";

const AdminDashboard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAdminSession = () => {
      const adminSession = Cookies.get('adminSession');
      if (!adminSession) {
        router.push('/auth/login');
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAdminSession();
  }, [router]);

  const handleLogOut = () => {
    Cookies.remove('adminSession');
    router.push('/auth/login');
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
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
