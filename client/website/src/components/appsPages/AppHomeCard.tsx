import React from "react";

const defaultProps = {
  title: "",
  url: "",
  picture: "",
  id: "",
};
const AppHomeCard = ({
  app = defaultProps,
}: {
  app?: {
    title: string;
    url: string;
    picture: string;
    id: string;
  };
}) => {
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
};

export default AppHomeCard;
