import MainContainer from "@/containers/MainContainer";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: `ContentCraft AI | Coming Soon`,
} satisfies Metadata;

const page = () => {
  return (
    <MainContainer>
      <div
        style={{
          backgroundColor: "black",
          height: "90vh",
          width: "100%",
          paddingTop: "40vh",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "25px" }}>Coming Soon ...</div>
        <Link href="/">Go Back to home</Link>
      </div>
    </MainContainer>
  );
};

export default page;
