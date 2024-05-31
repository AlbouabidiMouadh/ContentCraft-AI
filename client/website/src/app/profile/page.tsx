"use client";
import ProfileContainer from "@/containers/ProfileContainer";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("session");
    if (!token) {
      router.push("/auth/user/login");
    } else {
      router.push("/profile/general");
    }
  });

  return (
    <ProfileContainer>
      <div>{/* redirecting page for profile route */}</div>
    </ProfileContainer>
  );
};

export default page;
