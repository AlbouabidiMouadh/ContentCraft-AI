import MainContainer from "@/containers/MainContainer";
import React from "react";
import picture from "@/public/illustrations/Char 03.png";
import AppPageHeader from "@/components/appsPages/AppPageHeader";
import AppCard from "@/components/appsPages/AppCard";
import picture2 from "@/public/illustrations/Char 11.png";

const index = () => {
  const apps = [
    {
      id: "0",
      image: picture.src,
      title: "app title",
      url: "tool-0",
      sectionUrl: "image-tools",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, fugiat inventore itaque ipsa provident soluta dolorem ab earum facere iusto quo ex fugit expedita sapiente? Quas, tenetur natus? Dolore.",
    },
    {
      id: "1",
      image: picture.src,
      title: "app title",
      url: "tool-1",
      sectionUrl: "image-tools",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, fugiat inventore itaque ipsa provident soluta dolorem ab earum facere iusto quo ex fugit expedita sapiente? Quas, tenetur natus? Dolore.",
    },
    {
      id: "2",
      image: picture.src,
      title: "app title",
      url: "tool-2",
      sectionUrl: "image-tools",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, fugiat inventore itaque ipsa provident soluta dolorem ab earum facere iusto quo ex fugit expedita sapiente? Quas, tenetur natus? Dolore.",
    },
    {
      id: "3",
      image: picture.src,
      title: "app title",
      url: "tool-3",
      sectionUrl: "image-tools",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, fugiat inventore itaque ipsa provident soluta dolorem ab earum facere iusto quo ex fugit expedita sapiente? Quas, tenetur natus? Dolore.",
    },
  ];

  return (
    <MainContainer>
      <AppPageHeader props={{title: "image", imageUrl: picture2.src}} />
      {apps.map((item) => {
        return (
          <AppCard
            appSectionUrl={item.sectionUrl}
            id={item.id}
            image={item.image}
            title={item.title}
            url={item.url}
            description={item.description}
          />
        );
      })}
    </MainContainer>
  );
};

export default index;
