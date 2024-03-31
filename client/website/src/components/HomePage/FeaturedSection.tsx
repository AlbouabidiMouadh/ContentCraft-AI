"use client";
import React from "react";
import FeaturedCard from "./FeaturedCard";

const apps = [
  "item",
  "item",
  "item",
  "item",
  "item",
  // "item",
  // "item",
  // "item",
  // "item",
  // "item",
];
const appsFetcher = () => {
  // function for fetching the featured applications informations
};
const FeaturedSection = () => {
  return (
    <div style={{ margin: "50px 10%" }}>
      <div style={{ fontSize: "25px" }}>Featured AI applications</div>
      <div style={{ fontSize: "15px", marginBottom: "30px" }}>
        AI applications and services with unique features
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {apps.map(() => {
          return <FeaturedCard />;
        })}
      </div>
    </div>
  );
};

export default FeaturedSection;
