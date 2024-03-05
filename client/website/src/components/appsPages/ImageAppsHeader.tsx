import Image from "next/image";
import React from "react";
import picture from "@/public/illustrations/Char 08.png";
const ImageAppsHeader = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "400px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Image src={picture} alt="image-tools-header-picture" />
      <div>Discover all image apps and tools</div>
    </div>
  );
};

export default ImageAppsHeader;
