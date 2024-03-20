import MainContainer from "@/containers/MainContainer";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <MainContainer>
      <div>
        image tool page : {params.slug}
        <div>this is the part of the service informations</div>
      </div>
    </MainContainer>
  );
};

export default page;
