import AdminSubscriptions from "@/components/pages/AdminSubscriptions";
import type { Metadata } from "next";

export const metadata = { title: `Admin | Subscriptions` } satisfies Metadata;
const index = () => {
  return <AdminSubscriptions />;
};

export default index;
