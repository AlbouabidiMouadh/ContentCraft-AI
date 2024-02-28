import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import picture from "@/public/illustrations/Enjoy your finance.png";
import Link from "next/link";
const PlanCard = (props: {
  type: string;
  price: number | "Free";
  upgradeLink: string;
  color: string;
  promo: { price: number; limitDate: string } | null;
}) => {
  return (
    // <div
    //   style={{
    //     height: "400px",
    //     width: "300px",
    //     border: "solid black 1px",
    //     borderRadius: "10px",
    //     backgroundColor: "white",
    //   }}
    // >

    // </div>
    <Card className="py-4" style={{ backgroundColor: props.color }}>
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
