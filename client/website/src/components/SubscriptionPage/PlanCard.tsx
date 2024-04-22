import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

type CardInfo = {
  id: number;
  type: "Free" | "Paid";
  price: number | null;
  name: string;
};

const PlanCard = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <div
      style={{
        backgroundColor: "#222831",
        width: "300px",
        height: "300px",
        color: "black",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      <div>{cardInfo.type}</div>
      <div>{cardInfo.name}</div>
      <div>{cardInfo.price}</div>
      <Link
        type="button"
        href={cardInfo.type == "Free" ? "auth/signup" : "subscription/payment"}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {cardInfo.type == "Free" ? "signup" : "payment"}
      </Link>
    </div>
  );
};

export default PlanCard;
