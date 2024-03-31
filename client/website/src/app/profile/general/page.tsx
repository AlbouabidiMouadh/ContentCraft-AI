import ProfileContainer from "@/containers/ProfileContainer";
import React from "react";

const index = () => {
  return (
    <ProfileContainer>
      <div style={{ padding: "50px" }}>
        <div style={{ fontSize: "25px", textAlign: "center", margin: "auto" }}>
          Welcome User
        </div>
      </div>
    </ProfileContainer>
  );
};

export default index;
