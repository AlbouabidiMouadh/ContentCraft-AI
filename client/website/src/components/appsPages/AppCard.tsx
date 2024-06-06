import { ServiceType } from "@/types/service";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import picture from "@/public/illustrations/Char 07.png"

const AppCard = ({ app }: { app: ServiceType }) => {
  return (
    <div
      style={{
        maxWidth: "70%",
        margin: "20px auto",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        transition: "transform 0.3s ease",
      }}
    >
      <div style={{ marginRight: "20px", flex: "1" }}>
        <Image
          src={picture.src}
          height={250}
          width={250}
          alt={`${app.name}-image`}
          style={{ borderRadius: "8px" }}
        />
      </div>
      <div style={{ flex: "2" }}>
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "10px" }}>
            {app.name}
          </h2>
          <p style={{ fontSize: "16px", color: "#6B7280", marginBottom: "20px" }}>
            {app.description}
          </p>
          <Link href={`/apps/sections/${app.sectionName}/${app.name}`} passHref>
            <Button color="primary" variant="solid" size="lg">
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
