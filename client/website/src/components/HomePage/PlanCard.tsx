"use client"
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import picture from "@/public/illustrations/florid-data-security-and-financial-data-protection.gif";
import Color from "color";

const PlanCard = (props: {
  type: string;
  price: number | "Free";
  upgradeLink: string;
  color: string;
  promo: { price: number; limitDate: string } | null;
}) => {
  const textColor = Color(props.color).isDark() ? "white" : "black";

  return (
    <Card
      className="py-4"
      style={{
        backgroundColor: props.color,
        color: textColor,
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget.style.transform = "scale(1.05)"),
          (e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.style.transform = "scale(1)"),
          (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)");
      }}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={picture}
            width={270}
            height={270}
          />
        </div>
      </CardHeader>
      <CardBody
        className="overflow-visible py-2"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <h4 className="font-bold text-large" style={{ marginBottom: "10px" }}>
          {props.type}
        </h4>
        <p className="text-tiny uppercase font-bold" style={{ marginBottom: "5px" }}>
          {props.price === "Free" ? "Lifetime" : "Monthly"}
        </p>
        <h4 className="font-bold text-large" style={{ marginBottom: "15px" }}>
          {props.price === "Free" ? props.price : `$${props.price}`}
        </h4>
        {props.promo && (
          <p className="text-tiny uppercase font-bold" style={{ color: "red", marginBottom: "15px" }}>
            Promo: ${props.promo.price} until {props.promo.limitDate}
          </p>
        )}
        <div>
          <a
            href={props.upgradeLink}
            style={{
              textDecoration: "none",
              color: textColor,
              backgroundColor: textColor === "white" ? "black" : "white",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget.style.backgroundColor = textColor === "white" ? "white" : "black"),
                (e.currentTarget.style.color = textColor === "white" ? "black" : "white");
            }}
            onMouseLeave={(e) => {
              (e.currentTarget.style.backgroundColor = textColor === "white" ? "black" : "white"),
                (e.currentTarget.style.color = textColor);
            }}
          >
            {props.price === "Free" ? "Sign Up Now" : "Upgrade Now"}
          </a>
        </div>
      </CardBody>
    </Card>
  );
};

export default PlanCard;
