import { Metadata } from "next";
import Login from "@/components/pages/Login";
export const metadata = {
  title: `ContentCraft AI | Login`,
} satisfies Metadata;
const LoginForm = () => {
  return <Login />;
};

export default LoginForm;
