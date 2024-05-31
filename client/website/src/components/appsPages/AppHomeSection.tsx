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
    // Function to fetch apps from an API or some data source
    const fetchApps = async () => {
      // Replace with your API endpoint or data fetching logic
      const response = await fetch(`/api/apps/${section.url}`);
      const data = await response.json();

      // Assuming the data is in the format you need
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
            <Link href={`/apps/${section.url}`} legacyBehavior>
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
