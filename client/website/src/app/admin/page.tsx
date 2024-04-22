// "use client"
import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountInfo } from "@/components/adminPage/AccountInfo";
import { AccountDetailsForm } from "@/components/adminPage/AccountDetailForm";
import AdminContainer from "@/containers/AdminContainer";
import AdminSidenavV2 from "@/components/adminPage/AdminSednavV2";

export const metadata = { title: `Admin | Profile` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <AdminContainer>
      <div style={{ display: "flex" }}>
        <AdminSidenavV2 activePage="profile" />
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
}
