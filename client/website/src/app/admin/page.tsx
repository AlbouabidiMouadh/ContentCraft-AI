import * as React from "react";
import AdminDashboard from "@/components/pages/AdminDashboard";
import type { Metadata } from "next";

export const metadata = { title: `Admin | Dashboard` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <AdminDashboard />;
}
