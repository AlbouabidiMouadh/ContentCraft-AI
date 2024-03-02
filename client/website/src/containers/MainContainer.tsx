import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: "484px" }}>{children}</div>
      <Footer />
    </>
  );
};

export default MainContainer;
