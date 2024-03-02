import React from "react";
import PlanCard from "./PlanCard";

const PlanSection = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ fontSize: "30px", textAlign: "center", marginBottom: "30px" }}>Plans</div>
      <div style={{ fontSize: "20px", textAlign: "center", color: "#363636" }}>
        Elevate your business to new heights with our upgraded IA services
        plans. <br /> Unleash limitless potential and redefine success today!
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 50,
          marginTop: "60px",
          paddingBottom: "100px",
        }}
      >
        {/* <PlanCard
          color="blue"
          type="Free"
          price="Free"
          upgradeLink="/"
          promo={null}
        /> */}
        <PlanCard
          color="white" // blue #211951
          type="Basic"
          price={49}
          upgradeLink="/"
          promo={null}
        />
        <PlanCard
          color="black" // orange #FE7A36
          type="Premium"
          price={99}
          upgradeLink="/"
          promo={null}
        />
      </div>
    </div>
  );
};

export default PlanSection;
