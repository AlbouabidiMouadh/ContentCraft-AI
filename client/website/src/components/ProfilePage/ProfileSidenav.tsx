"use client";
import { Group, Code } from "@mantine/core";
import {
  IconFingerprint,
  IconKey,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";

import type { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "@/lib/features/profile/profilePageSlice";

const data = [
  { link: "/profile/general", label: "General", icon: IconSettings },
  { link: "/profile/settings", label: "Security", icon: IconFingerprint },
  { link: "/profile/subscription", label: "Subscription", icon: IconKey },
];

const ProfileSidenav = () => {
  const active = useSelector((state: RootState) => state.profilePage.page);
  const dispatch = useDispatch();

  const handleLogOut = () => {};
  const navbarStyle: React.CSSProperties = {
    height: "90vh",
    width: "300px",
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
      onClick={() => {
        console.log(active);
        dispatch(setPage(item.label));
        console.log(active);
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
          <Code fw={700}>User name with picture</Code>
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

export default ProfileSidenav;
