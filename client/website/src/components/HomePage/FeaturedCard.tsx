import React from "react";
import illustration from "@/public/illustrations/Char 01.png";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
// this needs to get modified in desing and functions and adding the card props
const FeaturedCard = () => {
  return (
    <Card
      className="py-4"
      shadow="sm"
      style={{ backgroundColor: "black", color: "#fff" }}
    >
      <CardHeader className="h-[300px] pb-0 pt-2 px-4 flex-col items-start bg-dark text-white">
        <Image
          alt="Card background"
          className="object-cover rounded-xl "
          src="https://images.unsplash.com/photo-1516410290616-fb59b7994a51?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={220}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 bg-dark text-white">
        <p className="text-tiny uppercase font-bold">Section Name</p>
        <small className="text-default-500">pack type</small>
        <h4 className="font-bold text-large">Service Name</h4>
      </CardBody>
    </Card>
  );
};

export default FeaturedCard;
