
import type { Metadata } from "next";
import Forgetpassword from "@/components/pages/Forgetpassword";

export const metadata = {
  title: `ContentCraft AI | Forget password`,
} satisfies Metadata;

const index = () => {
  return <Forgetpassword />
};

export default index;
