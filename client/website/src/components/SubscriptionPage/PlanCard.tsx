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
  features: string[];
}) => {
  // Set card background color dynamically based on price
  const cardColor = props.price === "Free" ? "white" : props.color;

  // Determine text color based on card background color
  const textColor = Color(cardColor).isDark() ? "white" : "black";

  return (
    <Card
      className="py-4"
      style={{
        backgroundColor: cardColor, // Use the dynamically determined card background color
        color: textColor, // Use the dynamically determined text color
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <CardHeader className="px-4 pt-4">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
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
      <CardBody className="pt-2">
        <div className="text-center mb-4">
          <h4 className="font-bold text-xl">{props.type}</h4>
          <p className="text-sm uppercase font-bold">
            {props.price === "Free" ? "Lifetime" : "Monthly"}
          </p>
          {props.price !== "Free" ? (
            <h4 className="font-bold text-xl">${props.price}</h4>
          ) : (
            <div style={{ marginTop: "30px" }}></div>
          )}
          {props.promo && (
            <p className="text-xs uppercase font-bold text-red">
              Promo: ${props.promo.price} until {props.promo.limitDate}
            </p>
          )}
        </div>
        <div className="text-left mb-4 text-center">
          <h5 className="font-bold mb-2 text-center">Features:</h5>
          <ul className="list-disc list-inside">
            {props.features.map((feature, index) => (
              <li key={index} className="text-sm mb-1">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center" style={{ marginTop: "10px" }}>
          <a
            href={props.upgradeLink}
            className="btn"
            style={{
              backgroundColor: textColor === "white" ? "black" : "white",
              color: textColor,
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                textColor === "white" ? "white" : "black";
              e.currentTarget.style.color =
                textColor === "white" ? "black" : "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                textColor === "white" ? "black" : "white";
              e.currentTarget.style.color = textColor;
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
