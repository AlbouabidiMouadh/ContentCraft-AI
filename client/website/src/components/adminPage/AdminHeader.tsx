import Image from "next/image";
import React from "react";
import logo from "@/public/pictures/brain white.png";
const AdminHeader = () => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "black",
        fontSize: "18px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 20px",
      }}
    >
      <Image src={logo.src} alt="logo-image" width={30} height={30} />
      <div>Admin Dashboard</div>
      <div>Logout</div>
    </div>
  );
};

export default AdminHeader;
