import { ActionIcon, Container, Group, Text, rem } from "@mantine/core";
import React from "react";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        minHeight: "200px",
        backgroundColor: "black",
        color: "white",
        padding: "50px 10%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "30px",
        }}
      >
        <div style={{ maxWidth: "20%" }}>
          <div>ContentCraft AI</div>
          <div style={{ color: "gray" }}>
            Your gateway to cutting-edge technology and unparalleled user
            satisfaction.
          </div>
        </div>
        <div style={{ maxWidth: "20%" }}>
          <div
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              fontWeight: "bolder",
            }}
          >
            Services
          </div>
          <Link href="/apps/image-tools">
            <div style={{ color: "gray" }}>Images</div>
          </Link>
          <Link href="/apps/video-tools">
            <div style={{ color: "gray" }}>Videos</div>
          </Link>
          <Link href="/apps/writing-tools">
            <div style={{ color: "gray" }}>Text</div>
          </Link>
          <Link href="/apps/audio-tools">
            <div style={{ color: "gray" }}>Audio</div>
          </Link>
        </div>
        <div style={{ maxWidth: "20%" }}>
          <div
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              fontWeight: "bolder",
            }}
          >
            Project
          </div>
          <Link href="/coming-soon">
            <div style={{ color: "gray" }}>APIs</div>
          </Link>
          <Link href="/coming-soon">
            <div style={{ color: "gray" }}>Developers</div>
          </Link>
          <Link href="/coming-soon">
            <div style={{ color: "gray" }}>Github</div>
          </Link>
          <Link href="/coming-soon">
            <div style={{ color: "gray" }}>Open Source</div>
          </Link>
        </div>
        <div style={{ maxWidth: "20%" }}>
          <div
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              fontWeight: "bolder",
            }}
          >
            Community
          </div>
          <Link href="/about">
            <div style={{ color: "gray" }}>About</div>
          </Link>
          <Link href="/contact">
            <div style={{ color: "gray" }}>Contact Us</div>
          </Link>
          {/* <Link href="/">
            <div style={{ color: "gray" }}></div>
          </Link>
          <Link href="/">
            <div style={{ color: "gray" }}>element 4</div>
          </Link> */}
        </div>
      </div>
      <hr />
      <div style={{ textAlign: "center", marginTop: "30px", color: "gray" }}>
        © 2024 ContentCraft AI. All rights reserved.
        <Group gap={0} justify="center" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
};

export default Footer;
