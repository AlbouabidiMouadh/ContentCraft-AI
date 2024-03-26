import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

const ProfileFooter = () => {
  const footerStyle: React.CSSProperties = {
    marginTop: rem(120),
    borderTop: `1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))`,
  };

  const innerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "var(--mantine-spacing-md) var(--mantine-spacing-md)",
    flexDirection: "row",
  };

  const linksStyle = {
    "@media (max-width: $mantine-breakpoint-sm)": {
      marginTop: "var(--mantine-spacing-lg)",
      marginBottom: "var(--mantine-spacing-sm)",
    },
  };

  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
    //   onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div style={footerStyle}>
      <div style={innerStyle}>
        <MantineLogo size={28} />

        <Group style={linksStyle}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};
export default ProfileFooter;
