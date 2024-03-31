import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import React from "react";

const index = () => {
  return (
    <ProfileContainer>
      <div style={{ display: "flex" }}>
        <ProfileSidenav pageName="General" />
        <div style={{ padding: "50px" }}>
          <div
            style={{ fontSize: "25px", textAlign: "center", margin: "auto" }}
          >
            Welcome User
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default index;
