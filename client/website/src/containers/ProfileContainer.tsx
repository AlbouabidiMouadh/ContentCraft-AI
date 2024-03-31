"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import React from "react";

const ProfileContainer = ({ children }: { children: React.ReactNode }) => {


  return (
    <>
      <NavBar />
      <div style={{ minHeight: "95vh" }}>
        <div style={{ display: "flex" }}>
          <ProfileSidenav/>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileContainer;
