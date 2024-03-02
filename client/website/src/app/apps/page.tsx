import MainContainer from "@/containers/MainContainer";
import Image from "next/image";
import React from "react";

import picture from "@/public/illustrations/Char 09.png";
import Link from "next/link";
const appsList = ["item", "item", "item", "item"];
const Apps = () => {
  return (
    <MainContainer>
      <div
        style={{
          height: "250px",
          backgroundColor: "black",
          color: "white",
          padding: "50px 15%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Image src={picture} alt="image-header" height={150} />
        </div>
        <div>
          <div style={{ fontSize: "30px" }}>
            this is the title of the header
          </div>
          <div style={{ fontSize: "24px", color: "dimgray" }}>
            this is the subtitle of the header
          </div>
        </div>
      </div>

      {/* this is the part of application sections */}

      {/* this is the section of the pictures */}
      <div style={{ margin: "100px 10%" }}>
        <h1 style={{ fontSize: "20px" }}>Pictures Apps</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          {appsList.map(() => {
            return (
              <div
                style={{
                  width: "250px",
                  height: "350px",
                  backgroundColor: "black",
                  borderRadius: "30px",
                }}
              >
                {/* we put here the card of the app */}
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              style={{
                margin: "auto 50px",
              }}
            >
              <Link href="/apps/image-tools">Browse All</Link>
            </div>
          </div>
        </div>
      </div>
      {/* this is the section of the videos */}
      <div style={{ margin: "100px 10%" }}>
        <h1 style={{ fontSize: "20px" }}>Videos Apps</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          {appsList.map(() => {
            return (
              <div
                style={{
                  width: "250px",
                  height: "350px",
                  backgroundColor: "black",
                  borderRadius: "30px",
                }}
              >
                {/* we put here the card of the app */}
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              style={{
                margin: "auto 50px",
              }}
            >
              <Link href="/apps/video-tools">Browse All</Link>
            </div>
          </div>
        </div>
      </div>
      {/* this is the section of the writting */}
      <div style={{ margin: "100px 10%" }}>
        <h1 style={{ fontSize: "20px" }}>writting Apps</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          {appsList.map(() => {
            return (
              <div
                style={{
                  width: "250px",
                  height: "350px",
                  backgroundColor: "black",
                  borderRadius: "30px",
                }}
              >
                {/* we put here the card of the app */}
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              style={{
                margin: "auto 50px",
              }}
            >
              <Link href="/apps/content-tools">Browse All</Link>
            </div>
          </div>
        </div>
      </div>

      {/* this is the section of the etc */}
      <div style={{ margin: "100px 10%" }}>
        <h1 style={{ fontSize: "20px" }}>Logo Apps</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          {appsList.map(() => {
            return (
              <div
                style={{
                  width: "250px",
                  height: "350px",
                  backgroundColor: "black",
                  borderRadius: "30px",
                }}
              >
                {/* we put here the card of the app */}
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              style={{
                margin: "auto 50px",
              }}
            >
              <Link href="/apps/logo-tools">Browse All</Link>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Apps;
