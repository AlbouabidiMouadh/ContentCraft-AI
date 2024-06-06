import React, { useEffect, useState } from "react";
import AppHomeCard from "@/components/appsPages/AppHomeCard";
import Link from "next/link";
import { SectionType } from "@/types/section";
import { ServiceType } from "@/types/service";

const AppHomeSection = ({
  section,
}: {
  section: SectionType;
}) => {
  const [appsList, setAppsList] = useState<ServiceType[]>([]);

  useEffect(() => {
    const fetchApps = async () => {
      const response = await fetch(`http://localhost:4000/api/apps/${section.url}`);
      const data = await response.json();

      setAppsList(data);
    };

    fetchApps();
  }, [section.url]);

  return (
    <div style={{ margin: "100px 10%" }}>
      <h1 style={{ fontSize: "24px", textAlign: "center" }}>{section.name}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        {appsList.map((app) => (
          <AppHomeCard key={app.id} app={app} />
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            <Link href={`/apps/sections/${section.name}`} legacyBehavior>
              <a
                style={{
                  fontSize: "18px",
                  color: "#0070f3",
                  textDecoration: "none",
                }}
              >
                Browse All
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHomeSection;
