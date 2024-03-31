import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import React from "react";

const ProfileContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: "95vh" }}>{children}</div>
      <Footer />
    </>
  );
};

export default ProfileContainer;
