import MainContainer from "@/containers/MainContainer";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: `ContentCraft AI | Coming Soon`,
} satisfies Metadata;

const ComingSoonPage = () => {
  return (
    <MainContainer>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Coming Soon ...
        </div>
        <Link href="/" legacyBehavior>
          <a
            style={{
              color: "gray",
              fontSize: "18px",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
          >
            Go Back to Home
          </a>
        </Link>
      </div>
    </MainContainer>
  );
};

export default ComingSoonPage;
