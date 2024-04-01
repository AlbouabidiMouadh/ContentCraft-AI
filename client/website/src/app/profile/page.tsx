"use client";
import ProfileContainer from "@/containers/ProfileContainer";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("./profile/general");
  });
  return (
    <ProfileContainer>
      <div>
        {/* redirecting page for profile route */}
      </div>
    </ProfileContainer>
  );
};

export default page;
