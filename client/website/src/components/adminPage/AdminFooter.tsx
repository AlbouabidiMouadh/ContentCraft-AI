import React from "react";
import { Typography } from "@mui/material";

const AdminFooter = () => {
  return (
    <div
      style={{
        fontSize: "15px",
        textAlign: "center",
        padding: "20px",
        color: "#ffffff",
        background: "linear-gradient(90deg, #000000, #434343)",
        position: "fixed",
        bottom: 0,
        width: "100%",
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="body2">
        © 2024 ContentCraft AI. All rights reserved.
      </Typography>
    </div>
  );
};

export default AdminFooter;
