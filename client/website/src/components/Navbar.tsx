import React from "react";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

// this is logo needs to be changed to my own website logo or my company logo
import Image from "next/image";
import picture from "@/public/pictures/brain white.png";
const NavBar = () => {
  return (
    <Navbar
      maxWidth="full"
      className="dark"
      isBlurred={false}
      position="sticky"
    >
      <NavbarBrand>
        <Link color="foreground" href="/">
          <Image
            src={picture}
            alt="logo"
            height={40}
            width={40}
            style={{ marginRight: "4px" }}
          />
          <p className="font-bold text-inherit">ContentCraft AI</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/apps">
            Apps
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/subscription">
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link color="primary" href="/auth/login">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/auth/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
