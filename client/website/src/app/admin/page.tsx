import * as React from "react";
import type { Metadata } from "next";
import AdminDashboard from "@/components/pages/AdminDashboard";

export const metadata = { title: `Admin | Dashboard` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <AdminDashboard />;
}
