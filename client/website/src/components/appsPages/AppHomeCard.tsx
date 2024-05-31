import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { ServiceType } from "@/types/service";

const defaultProps: ServiceType = {
  id: "",
  name: "Unknown App",
  url: "#",
  picture:
    "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "",
  features: [""],
  reviews: [{ likes: 0, review: "" }],
  inputType: "",
  outputType: "",
  sectionId: "",
  sectionName: "",
  pack: "",
};

const AppHomeCard = ({
  app = defaultProps,
}: {
  app?: ServiceType;
}) => {
  return (
    <Card className="py-4 max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt={`${app.name} image`}
          className="object-cover rounded-xl"
          src={app.picture}
          width={200}
          height={150}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-tiny uppercase font-bold text-gray-500">App Category</p>
        <small className="text-default-500">Free</small>
        <h4 className="font-bold text-large text-gray-800 mt-2">
          <Link href={app.url} passHref>
            <a className="text-blue-500 hover:underline">{app.name}</a>
          </Link>
        </h4>
      </CardBody>
    </Card>
  );
};

export default AppHomeCard;
