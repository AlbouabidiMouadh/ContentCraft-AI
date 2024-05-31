import { Avatar, Group, Rating, Text } from "@mantine/core";
import React from "react";

const CustomersThoughtsSection = () => {
  return (
    <div style={{ margin: "100px 10% 100px" }}>
      <div>
        <div style={{ textAlign: "center", fontSize: "28px" }}>
          Embraced by global users, our services resonate across borders, <br />
          making waves worldwide.
        </div>
        <div
          style={{
            fontSize: "20px",
            textAlign: "center",
            color: "#363636",
            marginTop: "10px",
          }}
        >
          Join our thriving community and experience the power of innovation
          firsthand.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "50px",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: 15,
        }}
      >
        <div style={{ width: "25vw" }}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
              alt="Jacob Warnhalter"
              radius="xl"
            />
            <div>
              <Text size="sm">Natalie, Content Creator</Text>
              <Rating value={4.5} fractions={2} readOnly />
            </div>
          </Group>
          <Text pl={54} pt="sm" size="sm">
            "As a creative blogger, I rely on this website's intuitive IA
            services to streamline my content creation process. It helps me
            deliver engaging posts to my audience effortlessly, fueling my
            passion for storytelling and fostering a strong connection with my
            readers."
          </Text>
        </div>
        <div style={{ width: "26vw" }}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
              alt="Jacob Warnhalter"
              radius="xl"
            />
            <div>
              <Text size="sm">Sarah, Adventures Blogger</Text>
              <Rating value={5} fractions={2} readOnly />
            </div>
          </Group>
          <Text pl={54} pt="sm" size="sm">
            "As the founder of 'Adventures with Sarah,' I'm constantly looking
            for ways to enhance my blog's user experience. Thanks to this
            website's cutting-edge IA services, I can efficiently manage my
            content, engage with my readers, and ultimately, bring my creative
            vision to life in the digital world."
          </Text>
        </div>
        <div style={{ width: "26vw" }}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
              alt="Jacob Warnhalter"
              radius="xl"
            />
            <div>
              <Text size="sm">Marcus, Tech Blog Enthusiast</Text>
              <Rating value={4} fractions={2} readOnly />
            </div>
          </Group>
          <Text pl={54} pt="sm" size="sm">
            "Being a tech enthusiast and blogger, this website's innovative IA
            services have been a game-changer for me. It simplifies tasks like
            SEO optimization and content organization, allowing me to focus more
            on creating quality content and sharing valuable insights with my
            audience."
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CustomersThoughtsSection;
