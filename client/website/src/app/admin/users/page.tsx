import AdminUsers from "@/components/pages/AdminUsers";
import type { Metadata } from "next";

export const metadata = { title: `Admin | Users` } satisfies Metadata;

const index = () => {
  return <AdminUsers />;
};

export default index;
