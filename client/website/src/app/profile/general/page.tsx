import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import React from "react";
import type { Metadata } from "next";

export const metadata = { title: `Profile | General` } satisfies Metadata;

const index = () => {
  return (
    <ProfileContainer>
      <div style={{ display: "flex" }}>
        <ProfileSidenav pageName="General" />
        <div style={{ padding: "50px" }}>
          <div
            style={{ fontSize: "25px", textAlign: "center", margin: "auto" }}
          >
            Welcome User
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default index;
