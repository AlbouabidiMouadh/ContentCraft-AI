import ImageApp from "@/components/appsPages/ImageApp";
import ImageAppsHeader from "@/components/appsPages/ImageAppsHeader";
import MainContainer from "@/containers/MainContainer";
import React from "react";
import picture from "@/public/illustrations/Char 03.png";
const index = () => {
  const apps = [
    {
      id: "0",
      image: picture.src,
      title: "app title",
      url: "tool-0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, fugiat inventore itaque ipsa provident soluta dolorem ab earum facere iusto quo ex fugit expedita sapiente? Quas, tenetur natus? Dolore.",
    },
    {
      id: "0",
      image: picture.src,
      title: "app title",
      url: "tool-0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, fugiat inventore itaque ipsa provident soluta dolorem ab earum facere iusto quo ex fugit expedita sapiente? Quas, tenetur natus? Dolore.",
    },
    {
      id: "0",
      image: picture.src,
      title: "app title",
      url: "tool-0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, fugiat inventore itaque ipsa provident soluta dolorem ab earum facere iusto quo ex fugit expedita sapiente? Quas, tenetur natus? Dolore.",
    },
    {
      id: "0",
      image: picture.src,
      title: "app title",
      url: "tool-0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam, fugiat inventore itaque ipsa provident soluta dolorem ab earum facere iusto quo ex fugit expedita sapiente? Quas, tenetur natus? Dolore.",
    },
  ];

  return (
    <MainContainer>
      <ImageAppsHeader />
      {/* this is the image apps page */}
      {apps.map((item) => {
        return (
          <ImageApp
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
