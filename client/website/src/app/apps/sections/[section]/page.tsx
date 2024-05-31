import React from "react";
import { ServiceType } from "@/types/service";
import MainContainer from "@/containers/MainContainer";
import AppPageHeader from "@/components/appsPages/AppPageHeader";
import AppCard from "@/components/appsPages/AppCard";
import picture from "@/public/illustrations/Char 01.png";
const DummyAppsPage = () => {
  // Dummy section details
  const dummySection = {
    id: "1",
    name: "Dummy Section",
    description: "This is a dummy section",
    picture: picture.src,
    reviews: [{ likes: 0, review: "" }],
    url: "dummy-section-url",
    appsIds: ["1", "2", "3"],
  };

  // Dummy apps data
  const dummyApps: ServiceType[] = [
    {
      id: "1",
      name: "Dummy App 1",
      description: "Description of Dummy App 1",
      features: ["Feature 1", "Feature 2"],
      picture: picture.src,
      reviews: [{ stars: 0, review: "", user: "", userId: "" }],
      url: "app-1-url",
      inputType: "Type 1",
      outputType: "Type 2",
      sectionId: "1",
      sectionName: "Dummy Section",
      pack: "App Pack 1",
    },
    {
      id: "2",
      name: "Dummy App 2",
      description: "Description of Dummy App 2",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      picture: picture.src,
      reviews: [{ stars: 0, review: "", user: "", userId: "" }],
      url: "app-2-url",
      inputType: "Type 1",
      outputType: "Type 2",
      sectionId: "1",
      sectionName: "Dummy Section",
      pack: "App Pack 2",
    },
    {
      id: "3",
      name: "Dummy App 3",
      description: "Description of Dummy App 3",
      features: ["Feature 1"],
      picture: picture.src,
      reviews: [{ stars: 0, review: "", user: "", userId: "" }],
      url: "app-3-url",
      inputType: "Type 2",
      outputType: "Type 3",
      sectionId: "1",
      sectionName: "Dummy Section",
      pack: "App Pack 3",
    },
  ];

  return (
    <MainContainer>
      <AppPageHeader
        props={{
          title: "Dummy Section",
          imageUrl: dummySection.picture,
          description: dummySection.description,
        }}
      />
      {dummyApps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </MainContainer>
  );
};

export default DummyAppsPage;
