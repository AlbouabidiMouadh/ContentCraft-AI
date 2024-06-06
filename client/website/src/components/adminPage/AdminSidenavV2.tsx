"use client";
import { Code, Group } from "@mantine/core";
import Link from "next/link";
import {
  IconBrandDatabricks,
  IconLayoutBoard,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
type ActivePageType =
  | "users"
  // | "profile"
  | "dashboard"
  | "services"
  | "subscriptions"
  | "packs"
  | "sections"
  | "payments";

const data = [
  { link: "/admin", label: "Dashboard", icon: IconLayoutBoard },
  // { link: "/admin/profile", label: "Profile", icon: IconSettings },
  { link: "/admin/users", label: "Users", icon: IconBrandDatabricks },
  { link: "/admin/services", label: "Services", icon: IconBrandDatabricks },
  { link: "/admin/payments", label: "Payments", icon: IconBrandDatabricks },
  { link: "/admin/packs", label: "Packs", icon: IconBrandDatabricks },
  { link: "/admin/sections", label: "Sections", icon: IconBrandDatabricks },
  {
    link: "/admin/subscriptions",
    label: "Subscriptions",
    icon: IconBrandDatabricks,
  },
];

const AdminSidenavV2 = ({
  activePage,
  handleLogOut,
}: {
  activePage: ActivePageType;
  handleLogOut: () => void;
}) => {
  const [username, setusername] = useState<string>("");
  useEffect(() => {
    const session = Cookies.get("adminSession");
    if (!session) return;
    setusername(JSON.parse(session).user.name);
  }, []);
  const navbarStyle: React.CSSProperties = {
    height: "100vh",
    width: "250px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #ccc",
    backgroundColor: "#1a1a1a",
    color: "white",
  };

  const headerStyle: React.CSSProperties = {
    paddingBottom: "20px",
    marginBottom: "20px",
    borderBottom: "1px solid #ccc",
  };

  const footerStyle: React.CSSProperties = {
    paddingTop: "20px",
    borderTop: "1px solid #ccc",
  };

  const linkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "16px",
    color: "#ccc",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    transition: "background-color 0.3s",
  };

  const linkActiveStyle: React.CSSProperties = {
    backgroundColor: "#333",
    color: "#fff",
  };

  const linkIconStyle: React.CSSProperties = {
    marginRight: "10px",
    width: "20px",
    height: "20px",
  };

  const links = data.map((item) => (
    <Link key={item.label} href={item.link} passHref legacyBehavior>
      <a
        style={{
          ...linkStyle,
          ...(item.label.toLowerCase() === activePage ? linkActiveStyle : null),
        }}
      >
        <item.icon stroke={1.5} style={linkIconStyle} />
        <span>{item.label}</span>
      </a>
    </Link>
  ));

  return (
    <nav style={navbarStyle}>
      <Group style={headerStyle}>
        <Code fw={700} style={{ fontSize: "24px" }}>
          {username}
        </Code>
      </Group>
      {links}
      <Group style={footerStyle}>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            handleLogOut();
          }}
          style={linkStyle}
        >
          <IconLogout style={linkIconStyle} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Group>
    </nav>
  );
};

export default AdminSidenavV2;
