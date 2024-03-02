import React from "react";
import picture from "@/public/illustrations/Char 05.png";
import Image from "next/image";
const QualitySection = () => {
  return (
    <div
      style={{
        minHeight: "400px",
        backgroundColor: "white",
        margin: "70px 10% 0",
      }}
    >
      
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "80px 0",
        }}
      >
        <div style={{ maxWidth: "300px" }}>
          <Image src={picture} height={250} width={250} alt="picture" />
          <div style={{ fontSize: "20px", marginTop: "30px" }}>
            {" "}
            this is for the Services that the website provides{" "}
          </div>
        </div>
        <div style={{ maxWidth: "300px" }}>
          <Image src={picture} height={250} width={250} alt="picture" />
          <div style={{ fontSize: "20px", marginTop: "30px" }}>
            this is for the quality of the resources and could be for the speed
          </div>
        </div>
        <div style={{ maxWidth: "300px" }}>
          <Image src={picture} height={250} width={250} alt="picture" />
          <div style={{ fontSize: "20px", marginTop: "30px" }}>
            this is for the more coming service to talk about them
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
