import React from "react";

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
      <div>logo</div>
      <div>Admin Dashboard</div>
      <div>options | Account | Logout</div>
    </div>
  );
};

export default AdminHeader;
