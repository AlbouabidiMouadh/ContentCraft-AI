import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import React from "react";
import type { Metadata } from "next";
import ProfileSubscription from "@/components/pages/ProfileSubscription";

export const metadata = { title: `Profile | Subscription` } satisfies Metadata;

const index = () => {
  return <ProfileSubscription />;
};

export default index;
