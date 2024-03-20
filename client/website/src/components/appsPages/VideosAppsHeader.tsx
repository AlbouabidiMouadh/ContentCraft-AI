import Image from "next/image";
import React from "react";
import picture from "@/public/illustrations/Char 11.png";
const VideosAppsHeader = () => {
  return (
    <div
      style={{
        height: "300px",
        backgroundColor: "black",
        color: "white",
        padding: "50px 15%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={picture} alt="image-tools-header" height={250} />
      <div>Discover all image apps and tools</div>
    </div>
  );
}

export default VideosAppsHeader