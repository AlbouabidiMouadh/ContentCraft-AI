import ProfileGeneral from "@/components/pages/ProfileGeneral";
import React from "react";
import { Metadata } from "next";
export const metadata = {
  title: `Profile | General`,
} satisfies Metadata;
const page = () => {
  return <ProfileGeneral />;
};

export default page;
