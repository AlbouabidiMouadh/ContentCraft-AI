"use client";
import React, { useEffect, useState } from "react";
import { ServiceType } from "@/types/service";
import MainContainer from "@/containers/MainContainer";
import AppPageHeader from "@/components/appsPages/AppPageHeader";
import AppCard from "@/components/appsPages/AppCard";
import axios from "axios";
import { useParams } from "next/navigation";
import picture from "@/public/illustrations/Char 07.png"

const SectionApps = () => {
  const router = useParams<{ section: string }>();
  const sectionName = router.section;
  const [section, setSection] = useState<any>(null);
  const [apps, setApps] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSectionAndApps = async () => {
      try {
        console.log("section name: " + sectionName);
        // Fetch section data
        const sectionResponse = await axios.get(
          "http://localhost:4000/api/sectionByName/" + sectionName
        );
        const sectionData = sectionResponse.data;
        console.log(sectionData);
        console.log(sectionData._id);
        // Fetch apps data by section ID
        const appsResponse = await axios.get(
          `http://localhost:4000/api/applications/section/${sectionData._id}`
        );
        let appsData = appsResponse.data;
        appsData.id = appsData._id
          // Update state
          setSection(sectionData);
        setApps(appsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchSectionAndApps();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner if you have one
  }

  if (!section || apps.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <MainContainer>
      <AppPageHeader
        props={{
          title: section.name,
          imageUrl: section.picture ? section.picture : picture.src,
          description: section.description,
        }}
      />
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </MainContainer>
  );
};

export default SectionApps;
