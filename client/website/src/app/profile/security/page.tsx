import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import React from "react";
import type { Metadata } from "next";
import ProfileSecurity from "@/components/pages/ProfileSecurity";

export const metadata = { title: `Profile | Security` } satisfies Metadata;

const index = () => {
  return <ProfileSecurity />;
};

export default index;
