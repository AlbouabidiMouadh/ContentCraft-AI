"use client";
import React, { useEffect, useState } from "react";
import { ServiceType } from "@/types/service";
import MainContainer from "@/containers/MainContainer";
import AppPageHeader from "@/components/appsPages/AppPageHeader";
import AppCard from "@/components/appsPages/AppCard";
import axios from "axios";
import { useParams } from "next/navigation";
import picture from "@/public/illustrations/Char 07.png";
import { CircularProgress } from "@mui/material";

const SectionApps = () => {
  const router = useParams<{ section: string }>();
  const sectionName = router.section;
  const [apps, setApps] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSectionAndApps = async () => {
      try {
        // Fetch apps data by section ID
        const appsResponse = await axios.get(
          `http://localhost:4000/api/applications/pack/Free`
        );
        let appsData = appsResponse.data;
        // appsData.id = appsData._id
        // Update state
        console.log(appsData);
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
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    ); // You can replace this with a spinner if you have one
  }

  if (apps.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <MainContainer>
      <AppPageHeader
        props={{
          title: "Free",
          imageUrl: picture.src,
          description: "Free Services",
        }}
      />
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </MainContainer>
  );
};

export default SectionApps;
