import React from "react";
import FeaturedCard from "./FeaturedCard";

const apps = ["item", "item", "item", "item", "item", "item", "item", "item"];
const appsFetcher = () => {
  // function for fetching the featured applications informations
};
const FeaturedSection = () => {
  return (
    <div style={{ minHeight: "800px", margin: "50px 10%" }}>
      <div style={{ fontSize: "25px" }}>Featured AI applications</div>
      <div style={{ fontSize: "15px", marginBottom: "30px" }}>
        AI applications and services with unique features
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
              <FeaturedCard />
              {/* this should be the logic of creating the featured apps */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedSection;
