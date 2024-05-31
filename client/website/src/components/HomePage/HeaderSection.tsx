"use client";

import React from "react";
import colors from "@/utils/colors";
import { 
  IconStar, 
  IconRocket, 
  IconPalette, 
  IconCamera, 
  IconVideo,
  IconMusic,
  IconBook,
  IconMessageCircle
} from "@tabler/icons-react";
import { Button } from "@nextui-org/button";

const premiumButtonHandler = () => {
  console.log("Premium button clicked");
};

const freeButtonHandler = () => {
  console.log("Free button clicked");
};

const Header = () => {
  return (
    <div
      style={{
        marginTop: "-20px",
        backgroundColor: "black",
        paddingTop: "20px"
      }}
    >
      <div
        style={{ 
          textAlign: "center", 
          margin: "20px 15% 5px", 
          // padding: "10px", 
          display: "flex", 
          justifyContent: "center", 
          gap: "10px" 
        }}
      >
        {/* <IconStar size={20} style={{ color: "white" }} />
        <IconRocket size={20} style={{ color: "white" }} />
        <IconCamera size={20} style={{ color: "white" }} />
        <IconVideo size={20} style={{ color: "white" }} />
        <IconMusic size={20} style={{ color: "white" }} />
        <IconBook size={20} style={{ color: "white" }} />
        <IconMessageCircle size={20} style={{ color: "white" }} /> */}
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
        <Button size="lg" color="primary" variant="shadow" onClick={premiumButtonHandler}>
          Premium
        </Button>
        <Button size="lg" color="primary" variant="ghost" onClick={freeButtonHandler}>
          Free
        </Button>
      </div>
    </div>
  );
};

export default Header;
