import React from "react";
import PlanCard from "./PlanCard";

const PlanSection = () => {
  return (
    <div style={{ backgroundColor: "white", padding: "50px 0" }}>
      <div style={{ textAlign: "center", fontSize: "28px", marginBottom: "20px" }}>
        Plans
      </div>
      <div style={{ fontSize: "20px", textAlign: "center", color: "#363636", marginBottom: "40px" }}>
        Elevate your business to new heights with our upgraded AI services plans.
        <br /> Unleash limitless potential and redefine success today!
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "50px",
          padding: "0 10%",
        }}
      >
        <PlanCard
          color="white" // Replace with actual color value if needed
          type="Basic"
          price="Free"
          upgradeLink="/"
          promo={null}
        />
        <PlanCard
          color="black" // Replace with actual color value if needed
          type="Premium"
          price={29}
          upgradeLink="/"
          promo={null}
        />
      </div>
    </div>
  );
};

export default PlanSection;
