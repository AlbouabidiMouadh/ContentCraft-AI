import React from "react";
import Image from "next/image";
import picture1 from "@/public/illustrations/Cool Kids - Brainstorming.png";
import picture2 from "@/public/illustrations/Cool Kids - Brainstorming (1).png";
import picture3 from "@/public/illustrations/Cool Kids - Brainstorming (2).png";

const QualitySection = () => {
  const sections = [
    // {
    //   title: "AI-Powered Services",
    //   text: "Discover our range of AI-powered services designed to streamline your content creation process. From automated writing assistants to intelligent video editing tools, we offer solutions that save you time and enhance your productivity.",
    // },
    // {
    //   title: "Quality and Speed",
    //   text: "Experience the perfect balance of quality and speed with our AI tools. Our technology ensures high-quality outputs while significantly reducing the time required to produce top-notch content, helping you stay ahead of your deadlines.",
    // },
    // {
    //   title: "Upcoming Features",
    //   text: "Stay tuned for our upcoming services! We are constantly innovating and adding new features to enhance your content creation experience. Our future updates will include advanced AI capabilities to keep you at the cutting edge of content technology.",
    // },
    {
      title: "AI Services",
      text: "Streamline your content creation with our AI-powered tools.",
      picture: picture3.src,
    },
    {
      title: "Quality & Speed",
      text: "Achieve high-quality results quickly with our AI technology.",
      picture: picture2.src,
    },
    {
      title: "Upcoming Features",
      text: "Stay tuned for new features and updates.",
      picture: picture1.src,
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {sections.map((section, index) => (
          <div key={index} style={styles.item}>
            <Image
              src={section.picture}
              height={250}
              width={250}
              alt={`Illustration ${index + 1}`}
            />
            <div style={styles.text}>
              <h3 style={styles.title}>{section.title}</h3>
              <p>{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "400px",
    backgroundColor: "white",
    margin: "70px 10% 0",
  },
  content: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
    margin: "80px 0",
    flexWrap: "wrap" as "wrap",
    rowGap: "100px",
    gap: "50px",
  },
  item: {
    width: "300px",
    height: "auto",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center" as "center",
    textAlign: "center" as "center",
  },
  text: {
    fontSize: "16px",
    marginTop: "20px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
};

export default QualitySection;
