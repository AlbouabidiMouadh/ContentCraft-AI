import React from "react";
import type { Metadata } from "next";
import AdminPayments from "@/components/pages/AdminPayments";

export const metadata = { title: `Admin | Payments` } satisfies Metadata;

const page = () => {
  return <AdminPayments />;
};

export default page;
