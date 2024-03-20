import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const VideoApp = (props: {
  id: string;
  image: string;
  title: string;
  url: string;
  description: string;
}) => {
  return (
    <div
      style={{
        minHeight: "400px",
        margin: "0 15%",
        padding: "50px 0",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
      }}
    >
      <Image
        src={props.image}
        height={350}
        width={350}
        alt={`${props.title}-image`}
      />
      <div
        style={{
          marginLeft: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "25px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {props.title}
        </h1>
        <p>{props.description}</p>
        <Button
          // href={props.url}
          color="primary"
          style={{
            margin: "auto",
            justifySelf: "flex-end",
          }}
        >
          <Link href={`/apps/image-tools/${props.url}`}>Start</Link>
        </Button>
      </div>
    </div>
  );
};

export default VideoApp;
