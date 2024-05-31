"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const FrequentQuestionsSection = () => {
  return (
    <div style={{ margin: "50px 10%" }}>
      <h2 style={{ textAlign: "center", fontSize: "28px" }}>
        Frequently Asked Questions
      </h2>
      <div
        style={{ maxWidth: "800px", margin: "50px auto", textAlign: "left" }}
      >
        <Accordion variant="light">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="What is Content Craft AI?"
          >
            <div>
              Content Craft AI is an innovative platform that uses artificial
              intelligence to assist content creators in their projects. Our
              tools are designed to enhance writing, video editing, graphic
              design, and more, making the content creation process more
              efficient and effective.
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="What features does Content Craft AI offer?"
          >
            <div>
              Our platform provides a variety of features including AI-driven
              writing assistants, automated video editing software, intelligent
              graphic design tools, and comprehensive analytics to track content
              performance. These features help you create high-quality content
              with ease.
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="How do I get started with Content Craft AI?"
          >
            <div>
              Getting started is simple. Sign up for an account on our website,
              select a pricing plan that fits your needs, and start exploring
              our tools. Our intuitive interface makes it easy to begin using
              our services right away.
            </div>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="Is there a free Pack available?"
          >
            <div>
              Yes, we offer a free Pack for new users. Which allow you to access
              most of our features and see how they can benefit your content
              creation process. No credit card is required for the free pack.
            </div>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            title="What pricing plans are available?"
          >
            <div>
              We offer two pricing plans for now to suit different needs. Our
              basic {"("}free{")"} plan provides access to essential tools,
              while our premium plans offer advanced features and additional
              support. You can find detailed information on our pricing page and
              choose the plan that{"’"}s right for you.
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentQuestionsSection;
