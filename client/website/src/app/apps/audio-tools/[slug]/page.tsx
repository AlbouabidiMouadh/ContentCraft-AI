import MainContainer from "@/containers/MainContainer";
import Image from "next/image";
import React from "react";
import picture from "@/public/illustrations/Char 12.png";

const appInfo = {
  title: "",
  image: "",
  description: "",
  apiURL: "",
};

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <MainContainer>
      <div
        style={{
          margin: "0 10%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Image src={picture} alt="tool picture" height={300} />
          <div
            style={{
              width: "50%",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "25px",
              }}
            >
              {params.slug}
            </div>
            <div style={{ fontSize: "22px" }}>Application description</div>
            <div style={{ fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium corrupti delectus reiciendis voluptates blanditiis
              temporibus dolore minus voluptatibus fuga iure rerum suscipit
              ipsum dolores beatae, quos at! Magnam, repellat eveniet.
            </div>
          </div>
        </div>
        <div style={{ margin: "50px 0 50px" }}>
          <div style={{ fontSize: "22px" }}>Application features</div>
          <ul style={{ listStylePosition: "inside", listStyleType: "initial" }}>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            </li>
            <li>
              temporibus quasi dignissimos reprehenderit, aperiam eum,
              repellendus
            </li>
            <li>
              maxime cum tenetur, explicabo nisi expedita? Dignissimos veritatis
            </li>
            <li>recusandae officia tempore accusantium magnam omnis.</li>
          </ul>
        </div>
        <div style={{ marginBottom: "100px" }}>
          <div style={{ fontSize: "22px" }}>Application : {params.slug}</div>
          <div
            style={{
              width: "700px",
              height: "500px",
              backgroundColor: "gray",
              margin: "auto",
              borderRadius: "15px",
              marginTop: "50px",
              textAlign: "center",
            }}
          >
            (application)
            {/* this is where the application process will be */}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default page;
