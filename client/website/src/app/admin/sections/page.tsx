import React from "react";
import type { Metadata } from "next";
import AdminSections from "@/components/pages/AdminSections";

export const metadata = { title: `Admin | Sections` } satisfies Metadata;

const page = () => {
  return <AdminSections />;
};

export default page;
