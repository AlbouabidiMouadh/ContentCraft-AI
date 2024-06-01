import LoginAdmin from "@/components/pages/LoginAdmin";
import type { Metadata } from "next";

export const metadata = { title: `Admin | Login` } satisfies Metadata;

const page = () => {
  return <LoginAdmin />;
};

export default page;
