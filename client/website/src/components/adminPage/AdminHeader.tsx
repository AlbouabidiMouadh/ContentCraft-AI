import Image from "next/image";
import React from "react";
import logo from "@/public/pictures/brain white.png";
import { Button } from "@mui/material";

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
        padding: "10px 20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image src={logo.src} alt="logo-image" width={40} height={40} />
        <div style={{ marginLeft: "10px", fontWeight: "bold", fontSize: "20px" }}>
          Admin Dashboard
        </div>
      </div>
      <Button 
        variant="outlined" 
        style={{
          color: "white", 
          borderColor: "white",
        }}
        onClick={() => {
          // Add logout functionality here
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default AdminHeader;
