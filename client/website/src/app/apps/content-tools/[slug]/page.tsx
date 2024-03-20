import MainContainer from "@/containers/MainContainer";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <MainContainer>
      <div>
        page slug name : <h1>{params.slug}</h1>
      </div>
    </MainContainer>
  );
};

export default page;
