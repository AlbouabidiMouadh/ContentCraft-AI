import React from "react";
import picture from "@/public/illustrations/Char 11.png";
import { Image } from "@mantine/core";
const defaultProps = {
  title: "title",
  imageUrl: picture.src,
};
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
const AppPageHeader = ({
  props = defaultProps,
}: {
  props: {
    title?: string;
    imageUrl?: string | StaticImageData;
  };
}) => {
  return (
    <div
      style={{
        height: "300px",
        backgroundColor: "black",
        color: "white",
        padding: "50px 15%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={props.imageUrl} alt="image-tools-header" h={250} />
      <div>Discover all {props.title} apps and tools</div>
    </div>
  );
};

export default AppPageHeader;
