"use client";
import MainContainer from "@/containers/MainContainer";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import picture from "@/public/illustrations/Char 09.png";
import AppHomeSection from "@/components/appsPages/AppHomeSection";
import { SectionType } from "@/types/section";

const Apps = () => {
  const [sections, setSections] = useState<SectionType[]>([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        // Replace this with your actual API endpoint to fetch sections
        const response = await fetch("/api/sections");
        const data = await response.json();
        setSections(data.sections);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, []);

  return (
    <MainContainer>
      <div
        style={{
          height: "250px",
          backgroundColor: "black",
          color: "white",
          padding: "50px 10%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image src={picture} alt="image-header" height={150} />
        <div style={{ marginLeft: "20px", maxWidth: "500px" }}>
          <div style={{ fontSize: "30px", marginBottom: "10px" }}>
            Discover All Apps
          </div>
          <div style={{ fontSize: "24px", color: "dimgray" }}>
            Explore a wide range of applications to boost your productivity
          </div>
        </div>
      </div>

      {/* Application Sections */}
      <div style={{ padding: "20px" }}>
        {sections.map((item) => (
          <AppHomeSection key={item.id} section={item} />
        ))}
      </div>
    </MainContainer>
  );
};

export default Apps;
