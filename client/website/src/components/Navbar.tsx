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
import MyLogo from "./MyLogo";

const NavBar = () => {
  return (
    <Navbar
      maxWidth="full"
      className="dark"
      isBlurred={false}
      position="static"
    >
      <NavbarBrand>
        <MyLogo />
        <p className="font-bold text-inherit">MyLogo</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/apps">
            Apps
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link color="primary" href="login">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
