"use client";
import { useState } from "react";
import { Group, Code } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";

const data = [
  { link: "", label: "Notifications", icon: IconBellRinging },
  { link: "", label: "Billing", icon: IconReceipt2 },
  { link: "", label: "Security", icon: IconFingerprint },
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Authentication", icon: Icon2fa },
  { link: "", label: "Other Settings", icon: IconSettings },
];

const ProfileSidenav = () => {
  const [active, setActive] = useState("Billing");

  const navbarStyle: React.CSSProperties = {
    height: "700px",
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

  const linkHoverStyle = {
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
    color: "light-dark(var(--mantine-color-black), var(--mantine-color-white))",
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
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
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
          <MantineLogo size={28} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div style={footerStyle}>
        <a
          href="#"
          onClick={(event) => event.preventDefault()}
          style={linkStyle}
        >
          <IconSwitchHorizontal style={linkIconStyle} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          onClick={(event) => event.preventDefault()}
          style={linkStyle}
        >
          <IconLogout style={linkIconStyle} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default ProfileSidenav;
