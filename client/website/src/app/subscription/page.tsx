import MainContainer from "@/containers/MainContainer";
import React from "react";
import type { Metadata } from "next";
import PlanCard from "@/components/SubscriptionPage/PlanCard";

export const metadata = {
  title: `ContentCraft AI | Subscription`,
} satisfies Metadata;

const index = () => {
  type CardInfo = {
    id: number;
    type: "Free" | "Paid";
    price: number | null;
    name: string;
  };
  const Packs: CardInfo[] = [
    {
      id: 0,
      type: "Free",
      price: null,
      name: "Test Pack",
    },
    {
      id: 1,
      type: "Paid",
      price: null,
      name: "Test Pack",
    },
    {
      id: 2,
      type: "Free",
      price: null,
      name: "Test Pack",
    },
    {
      id: 3,
      type: "Paid",
      price: null,
      name: "Test Pack",
    },
  ];
  return (
    <MainContainer>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "50px 10%",
          height: "100vh",
        }}
      >
        <div style={{ fontSize: "25px", textAlign: "center" }}>
          Title of the Subscription Page
        </div>
        <div style={{ fontSize: "22px", textAlign: "center" }}>
          Description of the Subscription Page
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "100px",
            flexWrap: "wrap",
            rowGap: "50px",
          }}
        >
          {Packs.map((item) => {
            return <PlanCard cardInfo={item} />;
          })}
        </div>
      </div>
    </MainContainer>
  );
};

export default index;
