import React from "react";
import FreeCard from "./FreeCard";
import { Button } from "@nextui-org/button";

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
const FreeSection = () => {
  return (
    <div style={{ margin: "20px 10%", width: "80%" }}>
      <div style={{ fontSize: "25px" }}>Free AI applications</div>
      <div style={{ fontSize: "15px", marginBottom: "30px" }}>
        Explore free AI applications
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignContent: "center",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {apps.map(() => {
          return <FreeCard />;
        })}
      </div>
      <div style={{ display: "flex", margin: "50px auto 0 " }}>
        <Button
          size="lg"
          color="primary"
          variant="solid"
          style={{
            margin: "auto",
          }}
        >
          Browse All
        </Button>
      </div>
    </div>
  );
};

export default FreeSection;
