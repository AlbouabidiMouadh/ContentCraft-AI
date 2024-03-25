import MainContainer from "@/containers/MainContainer";
import Image from "next/image";
import React from "react";

import picture from "@/public/illustrations/Char 09.png";
import Link from "next/link";
import AppHomeSection from "@/components/appsPages/AppHomeSection";
const appsList = ["item", "item", "item", "item"];

const sections = [
  {
    id: 0,
    title: "Image Apps",
    url: "image-tools",
    background: "",
  },
  {
    id: 1,
    title: "Video Apps",
    url: "video-tools",
    background: "",
  },
  {
    id: 2,
    title: "Audio Apps",
    url: "audio-tools",
    background: "",
  },
  {
    id: 3,
    title: "Content Apps",
    url: "content-tools",
    background: "",
  },
  {
    id: 4,
    title: "Writing Apps",
    url: "writing-tools",
    background: "",
  },
  {
    id: 5,
    title: "Logo Apps",
    url: "logo-tools",
    background: "",
  },
  {
    id: 6,
    title: "Analytics Apps",
    url: "analytics-tools",
    background: "",
  },
];

const Apps = () => {
  return (
    <MainContainer>
      <div
        style={{
          height: "250px",
          backgroundColor: "black",
          color: "white",
          padding: "50px 15%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Image src={picture} alt="image-header" height={150} />
        </div>
        <div>
          <div style={{ fontSize: "30px" }}>
            this is the title of the header
          </div>
          <div style={{ fontSize: "24px", color: "dimgray" }}>
            this is the subtitle of the header
          </div>
        </div>
      </div>

      {/* this is the part of application sections */}

      {sections.map((item) => {
        return <AppHomeSection section={item} />;
      })}
    </MainContainer>
  );
};

export default Apps;
