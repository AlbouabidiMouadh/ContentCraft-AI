import { Link } from "@nextui-org/link";
import React from "react";

type activePageType =
  | "users"
  | "profile"
  | "dashboard"
  | "services"
  | "subscriptions";

const AdminSidenavV2 = ({ activePage }: { activePage: activePageType }) => {
  return (
    <div
      style={{
        minWidth: "350px",
        height: "95vh",
        borderRight: "solid black 1px",
        color: "black",
        backgroundColor: "white",
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          padding: "20px",
          borderBottom: "solid black 1px",
          marginBottom: "10px",
        }}
      >
        name of the admin
      </div>
      <div
        style={
          activePage == "dashboard"
            ? { fontSize: "18px", backgroundColor: "#c2cbff" }
            : { fontSize: "18px" }
        }
      >
        <Link
          color={activePage == "dashboard" ? "primary" : "foreground"}
          href="/admin/dashboard"
          style={{ margin: "15px 40px" }}
        >
          Dashboard
        </Link>
      </div>
      <div
        style={
          activePage == "users"
            ? { fontSize: "18px", backgroundColor: "#c2cbff" }
            : { fontSize: "18px" }
        }
      >
        <Link
          color={activePage == "users" ? "primary" : "foreground"}
          href="/admin/users"
          style={{ margin: "15px 40px" }}
        >
          Users
        </Link>
      </div>
      <div
        style={
          activePage == "services"
            ? { fontSize: "18px", backgroundColor: "#c2cbff" }
            : { fontSize: "18px" }
        }
      >
        <Link
          color={activePage == "services" ? "primary" : "foreground"}
          href="/admin/services"
          style={{ margin: "15px 40px" }}
        >
          Services
        </Link>
      </div>
      <div
        style={
          activePage == "subscriptions"
            ? { fontSize: "18px", backgroundColor: "#c2cbff" }
            : { fontSize: "18px" }
        }
      >
        <Link
          color={activePage == "subscriptions" ? "primary" : "foreground"}
          href="/admin/subscriptions"
          style={{ margin: "15px 40px" }}
        >
          Subscriptions
        </Link>
      </div>
      <div
        style={
          activePage == "profile"
            ? { fontSize: "18px", backgroundColor: "#c2cbff" }
            : { fontSize: "18px" }
        }
      >
        <Link
          color={activePage == "profile" ? "primary" : "foreground"}
          href="/admin"
          style={{ margin: "15px 40px" }}
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default AdminSidenavV2;
