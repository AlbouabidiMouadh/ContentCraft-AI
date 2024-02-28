import React from "react";
import colors from "@/utils/colors";
import { Button } from "@nextui-org/button";

// this section needs more design and logic

const premiumButtonHandler = () => {};
const freeButtonHandler = () => {};
const Header = () => {
  return (
    <div
      style={{
        marginTop: "-20px",
        backgroundColor: "black",
      }}
    >
      <div
        style={{ textAlign: "center", margin: "20px 15% 0", padding: "20px" }}
      >
        this is the place of the symbols
      </div>
      <div
        style={{
          fontSize: "30px",
          color: "white",
          textAlign: "center",
          margin: "0 15%",
        }}
      >
        Empower Your Creativity with Cutting-Edge AI Content Creation Tools and
        Services
      </div>
      <div
        style={{
          fontSize: "20px",
          textAlign: "center",
          color: colors.gray,
          margin: "0 15% ",
        }}
      >
        Elevate Your Content Creation Experience: Unlock Infinite Possibilities
        with Cutting-Edge AI-Powered Apps for Images, Videos, Text, Summaries,
        and Beyond!
      </div>
      <div
        style={{
          textAlign: "center",
          color: "white",
          margin: "20px 15% 0",
          fontSize: "20PX",
        }}
      >
        Explore Apps Now
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          gap: "20px",
          marginTop: "20px",
          paddingBottom: "30px",
        }}
      >
        <Button size="lg" color="primary" variant="shadow">
          Premium
        </Button>
        <Button size="lg" color="primary" variant="ghost">
          Free
        </Button>
      </div>
    </div>
  );
};

export default Header;
