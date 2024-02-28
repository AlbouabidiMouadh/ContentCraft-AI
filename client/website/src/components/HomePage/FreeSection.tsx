import React from "react";
import FreeCard from "./FreeCard";
import { Button } from "@nextui-org/button";

const apps = ["item", "item", "item", "item", "item", "item", "item", "item"];
const appsFetcher = () => {
  // function for fetching the featured applications informations
};
const FreeSection = () => {
  return (
    <div style={{ minHeight: "800px", margin: "20px 10%" }}>
      <div style={{ fontSize: "25px" }}>Free AI applications</div>
      <div style={{ fontSize: "15px", marginBottom: "30px" }}>
        Explore free AI applications
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {apps.map(() => {
          return (
            <div>
              <FreeCard />
              {/* this should be the logic of creating the free apps */}
            </div>
          );
        })}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Button size="lg" color="primary" variant="solid">
          Browse All
        </Button>
      </div>
    </div>
  );
};

export default FreeSection;
