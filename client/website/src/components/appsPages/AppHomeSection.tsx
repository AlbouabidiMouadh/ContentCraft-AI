import React from "react";
import AppHomeCard from "./AppHomeCard";
import Link from "next/link";
const AppHomeSection = ({
  section,
}: {
  section: {
    id: number;
    title: string;
    url: string;
    background: string;
  };
}) => {
  const appsList = ["item", "item", "item", "item"];
  return (
    <div style={{ margin: "100px 10%" }}>
      <h1 style={{ fontSize: "20px" }}>{section.title}</h1>
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
        {appsList.map(() => {
          return <AppHomeCard />;
        })}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              margin: "auto 50px",
            }}
          >
            <Link href={`/apps/${section.url}`}>Browse All</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppHomeSection;
