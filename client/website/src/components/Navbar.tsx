"use client";
import React, { useState, useEffect } from "react";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import picture from "@/public/pictures/brain white.png";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Check if user session cookie exists
    const userSession = Cookies.get("session");
    if (userSession) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Clear user session cookie on logout
    Cookies.remove("session");
    setIsLoggedIn(false);
    router.push("/")
  };

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
        {isLoggedIn ? (
          <>
            <NavbarItem className="lg:flex">
              <Link color="primary" href="/profile">
                Profile
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button color="primary" onClick={handleLogout} variant="flat">
                Logout
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="lg:flex">
              <Link color="primary" href="/auth/user/login">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="/auth/user/signup"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
