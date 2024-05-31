import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import {
  IconCurrencyDollar,
  IconUsers,
  IconClock,
  IconCheck,
  IconTools,
  IconPhoneCall,
} from "@tabler/icons-react";

type CardInfo = {
  id: number;
  type: "Free" | "Paid";
  price: number | null;
  name: string;
  duration: string; // Subscription duration (e.g., "Monthly", "Yearly")
  features: string[]; // Array of feature highlights
  supportLevel: string; // Level of customer support (e.g., "Basic", "Premium")
};

const PlanCard = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <div
      style={{
        backgroundColor: "#292b2c",
        width: "300px",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        color: "white",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cardInfo.name}{" "}
        {cardInfo.type === "Paid" && (
          <IconCurrencyDollar style={{ marginLeft: "5px" }} />
        )}
      </div>
      <div
        style={{
          fontSize: "18px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Type: {cardInfo.type}{" "}
        {cardInfo.type === "Paid" && (
          <IconCheck style={{ marginLeft: "5px" }} />
        )}
      </div>
      <div
        style={{
          fontSize: "18px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Duration: {cardInfo.duration}{" "}
        <IconClock style={{ marginLeft: "5px" }} />
      </div>
      <div
        style={{ fontSize: "18px", marginBottom: "10px", textAlign: "center" }}
      >
        Features:
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: "0",
            textAlign: "center",
            margin: "5px 0",
          }}
        >
          {cardInfo.features.map((feature, index) => (
            <li
              key={index}
              style={{
                margin: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconTools style={{ marginRight: "5px" }} /> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          fontSize: "18px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Support: {cardInfo.supportLevel}{" "}
        <IconPhoneCall style={{ marginLeft: "5px" }} />
      </div>
      <Link
        href={
          cardInfo.type === "Free" ? "/auth/signup" : "/subscription/payment"
        }
      >
        <Button
          style={{
            backgroundColor: "#0070f3",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          {cardInfo.type === "Free" ? "Sign Up" : "Subscribe"}
        </Button>
      </Link>
    </div>
  );
};

export default PlanCard;
