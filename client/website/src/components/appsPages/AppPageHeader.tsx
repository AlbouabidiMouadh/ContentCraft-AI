import React from "react";
import { Container, Grid, Text } from "@mantine/core";

const defaultProps = {
  title: "title",
  description: "description", // Default description
  imageUrl: "/illustrations/Char11.png", // Adjust the image URL path as per your project structure
};

const AppPageHeader = ({ props = defaultProps }) => {
  return (
    <div style={{ padding: "50px 15%", backgroundColor: "black" }}>
      <Grid justify="space-evenly" align="center">
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <img
            src={props.imageUrl}
            alt="image-tools-header"
            width={250}
            height={250}
            style={{ borderRadius: "12px" }}
          />
        </div>
        <div>
          <Text
            size="xl"
            style={{ color: "white", fontWeight: 700, textAlign: "center" }}
          >
            Discover all {props.title} apps and tools
          </Text>
          <Text size="lg" style={{ color: "white", textAlign: "center" }}>
            {props.description}
          </Text>
        </div>
      </Grid>
    </div>
  );
};

export default AppPageHeader;
