import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import picture from "@/public/illustrations/Enjoy your finance.png";
import Link from "next/link";
import Color from "color";
const PlanCard = (props: {
  type: string;
  price: number | "Free";
  upgradeLink: string;
  color: Color | String | undefined;
  promo: { price: number; limitDate: string } | null;
}) => {
  let textColor: Color =
    Color(props.color).string() == Color("black").string() ? Color("white") : Color("black");
  return (
    <Card
      className="py-4"
      style={{
        backgroundColor: Color(props.color).string(),
        color: textColor.string(),
      }}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={picture}
            width={270}
            height={270}
          />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h4 className="font-bold text-large">{props.type}</h4>
        <p className="text-tiny uppercase font-bold">monthly</p>
        <h4 className="font-bold text-large">$ {props.price}</h4>
      </CardBody>
    </Card>
  );
};

export default PlanCard;
