import React from "react";
import type { Metadata } from "next";
import AdminPacks from "@/components/pages/AdminPacks";

export const metadata = { title: `Admin | Sections` } satisfies Metadata;

const page = () => {
  return <AdminPacks />;
};

export default page;
