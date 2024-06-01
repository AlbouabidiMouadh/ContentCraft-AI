import AdminProfile from "@/components/pages/AdminProfile";
import type { Metadata } from "next";

export const metadata = { title: `Admin | Profile` } satisfies Metadata;

const index = () => {
  return <AdminProfile />;
};

export default index;
