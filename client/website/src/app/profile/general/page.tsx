import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import picture from "@/public/illustrations/Enjoy your finance.png";
import { Input, TextField } from "@mui/material";
import { Button } from "@nextui-org/button";
import ProfileGeneral from "@/components/pages/ProfileGeneral";
export const metadata = { title: `Profile | General` } satisfies Metadata;

const index = () => {
  const profileData = {
    username: "username",
    email: "email",
    picture: "picture",
  };
  const handleUpdate = () => {};
  return <ProfileGeneral />;
};

export default index;
