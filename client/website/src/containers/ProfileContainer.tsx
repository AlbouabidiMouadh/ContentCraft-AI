import ProfileFooter from "@/components/ProfilePage/ProfileFooter";
import ProfileNavbar from "@/components/ProfilePage/ProfileNavbar";
import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import React from "react";

const ProfileContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProfileNavbar />
      <div style={{ display: "flex" }}>
        <ProfileSidenav />
        {children}
      </div>
      <ProfileFooter />
    </>
  );
};

export default ProfileContainer;
