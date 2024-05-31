"use client";
import { Code, Group } from "@mantine/core";
import { Link } from "@nextui-org/link";
import {
  IconBrandDatabricks,
  IconLayoutBoard,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import React from "react";

type activePageType =
  | "users"
  | "profile"
  | "dashboard"
  | "services"
  | "subscriptions";

const data = [
  { link: "/admin", label: "dashboard", icon: IconLayoutBoard },
  { link: "/admin/profile", label: "profile", icon: IconSettings },
  { link: "/admin/users", label: "users", icon: IconBrandDatabricks },
  { link: "/admin/services", label: "services", icon: IconBrandDatabricks },
  {
    link: "/admin/subscriptions",
    label: "subscriptions",
    icon: IconBrandDatabricks,
  },
  { link: "/admin/packs", label: "packs", icon: IconBrandDatabricks },
];

const AdminSidenavV2 = ({ activePage }: { activePage: activePageType }) => {
  let active = activePage;
  const handleLogOut = () => {};
  const navbarStyle: React.CSSProperties = {
    height: "90vh",
    width: "200px",
    padding: "var(--mantine-spacing-md)",
    display: "flex",
    flexDirection: "column",
    borderRight:
      "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
  };

  const navbarMainStyle: React.CSSProperties = {
    flex: "1",
  };

  const headerStyle: React.CSSProperties = {
    paddingBottom: "var(--mantine-spacing-md)",
    marginBottom: "calc(var(--mantine-spacing-md) * 1.5)",
    borderBottom:
      "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
  };

  const footerStyle: React.CSSProperties = {
    paddingTop: "var(--mantine-spacing-md)",
    marginTop: "var(--mantine-spacing-md)",
    borderTop:
      "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
  };

  const linkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "var(--mantine-font-size-sm)",
    color:
      "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-1))",
    padding: "var(--mantine-spacing-xs) var(--mantine-spacing-sm)",
    borderRadius: "var(--mantine-radius-sm)",
    fontWeight: "500",
  };

  const linkActiveStyle: React.CSSProperties = {
    backgroundColor: "var(--mantine-color-blue-light)",
    color: "var(--mantine-color-blue-light-color)",
  };

  const linkIconStyle = {
    color:
      "light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2))",
    marginRight: "var(--mantine-spacing-sm)",
    width: "25px",
    height: "25px",
  };

  const links = data.map((item) => (
    <a
      key={item.label}
      href={item.link}
      style={{
        ...linkStyle,
        ...(item.label === active ? linkActiveStyle : null),
      }}
    >
      <item.icon stroke={1.5} style={linkIconStyle} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav style={navbarStyle}>
      <div style={navbarMainStyle}>
        <Group style={headerStyle} justify="space-between">
          <Code fw={700} style={{ margin: "auto", fontSize: "18Fpx" }}>
            Admin Panel
          </Code>
        </Group>
        {links}
      </div>

      <div style={footerStyle}>
        <a href="#" onClick={(event) => handleLogOut} style={linkStyle}>
          <IconLogout style={linkIconStyle} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default AdminSidenavV2;
