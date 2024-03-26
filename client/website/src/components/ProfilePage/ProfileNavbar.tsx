"use client";
import { useState } from "react";
import { Container, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

const ProfileNavbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const headerStyle = {
    height: rem(56),
    marginBottom: rem(0),
    backgroundColor: "var(--mantine-color-body)",
    borderBottom: `1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))`,
  };

  const innerStyle = {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: "var(--mantine-radius-sm)",
    textDecoration: "none",
    color:
      "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
    fontSize: "var(--mantine-font-size-sm)",
    fontWeight: 500,
  };

  const hoverStyle = {
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
  };

  const activeStyle = {
    backgroundColor: "var(--mantine-color-blue-filled)",
    color: "var(--mantine-color-white)",
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      style={{
        ...linkStyle,
        ...(active === link.link ? activeStyle : null),
      }}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header style={headerStyle}>
      <Container size="xl" style={innerStyle}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};
export default ProfileNavbar;
