import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import React from "react";
import ProfileSecurity from "@/components/pages/ProfileSecurity";
import type { Metadata } from "next";

export const metadata = { title: `Profile | Security` } satisfies Metadata;

const index = () => {
  return <ProfileSecurity />;
};

export default index;
