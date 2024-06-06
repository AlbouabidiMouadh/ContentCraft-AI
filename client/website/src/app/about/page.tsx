import MainContainer from "@/containers/MainContainer";
import React from "react";
import type { Metadata } from "next";
import picture from "@/public/illustrations/3d-flame-office-worker-with-briefcase.png";
import { Image } from "@nextui-org/react";

export const metadata = { title: `ContentCraft AI | About` } satisfies Metadata;

const About = () => {
  return (
    <MainContainer>
      <div style={{ margin: "0 10%" }}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>About Us</h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            Welcome to ContentCraft AI, your platform for revolutionary
            AI-driven content creation services tailored for content creators
            and bloggers. Our mission is to empower creators like you with
            cutting-edge AI tools that simplify and enhance your content
            creation process.
          </p>
        </div>
        <div style={{ marginTop: "80px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Our Team
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ margin: "0 20px", textAlign: "center" }}>
              <Image
                src={picture.src}
                alt="Team Member 1"
                width={200}
                height={200}
                style={{
                  // borderRadius: "50%",
                  marginBottom: "20px",
                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Albouabidi Mouadh
              </p>
              <p style={{ fontSize: "1rem" }}>FOUNDER</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px", marginBottom: "100px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            Our mission is to revolutionize content creation by harnessing the
            power of artificial intelligence. We aim to provide content creators
            and bloggers with AI-driven solutions that streamline workflows,
            enhance creativity, and elevate content quality, ultimately
            empowering them to thrive in the digital landscape.
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default About;
