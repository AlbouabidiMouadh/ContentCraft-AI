import Signup from "@/components/pages/Signup";
import { Metadata } from "next";
export const metadata = {
  title: `ContentCraft AI | Signup`,
} satisfies Metadata;

const SignupForm = () => {
  return <Signup />;
};

export default SignupForm;
