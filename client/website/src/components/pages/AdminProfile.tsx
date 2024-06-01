"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import AdminSidenavV2 from "@/components/adminPage/AdminSidenavV2";
import AdminContainer from "@/containers/AdminContainer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountInfo } from "@/components/adminPage/AccountInfo";
import { AccountDetailsForm } from "@/components/adminPage/AccountDetailForm";

const AdminProfile = () => {
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
        <div style={{ width: "200px" }}>
          <AdminSidenavV2 activePage="profile" handleLogOut={handleLogOut} />
        </div>
        <div>
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Account</Typography>
            </div>
            <Grid container spacing={3}>
              <Grid lg={4} md={6} xs={12}>
                <AccountInfo />
              </Grid>
              <Grid lg={8} md={6} xs={12}>
                <AccountDetailsForm />
              </Grid>
            </Grid>
          </Stack>
        </div>
      </div>
    </AdminContainer>
  );
};

export default AdminProfile;
