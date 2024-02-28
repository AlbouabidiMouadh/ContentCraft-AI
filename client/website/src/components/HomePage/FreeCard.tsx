import Image from "next/image";
import React from "react";
import illustration from "@/public/illustrations/Char 01.png";

// this needs to get modified in desing and functions and adding the card props
const FreeCard = () => {
  return (
    <div
      style={{
        border: "solid black 1px",
        borderRadius: "10px",
        // backgroundColor: "gray",
        height: "300px",
        width: "250px",
      }}
    >
      <Image src={illustration} alt="card picture" height={250} />
      <div>this is the type of the card</div>
      <div style={{ height: "50px" }}>
        <div style={{ textAlign: "center" }}>this is the title of the card</div>
      </div>
    </div>
  );
};

export default FreeCard;
