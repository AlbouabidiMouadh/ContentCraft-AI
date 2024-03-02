"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const FrequentQuestionsSection = () => {
  return (
    <div style={{ margin: "20px 10% 100px" }}>
      <h2 style={{textAlign: "center", fontSize: "25px", }}>Frequent Asked Questions</h2>
      <div style={{ maxWidth: "70%", margin: "30px auto" }}>
        <Accordion isCompact>
          <AccordionItem key="1" aria-label="Accordion 1" title="Question 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Question 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Question 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentQuestionsSection;
