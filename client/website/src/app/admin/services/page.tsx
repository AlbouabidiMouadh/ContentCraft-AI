import AdminServices from "@/components/pages/AdminServices";
import type { Metadata } from "next";

export const metadata = { title: `Admin | Services` } satisfies Metadata;
const index = () => {
  return <AdminServices />;
};

export default index;
