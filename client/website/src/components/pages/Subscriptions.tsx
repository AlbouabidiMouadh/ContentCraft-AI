"use client";
import MainContainer from "@/containers/MainContainer";
import React, { useEffect, useState } from "react";
import PlanCard from "@/components/SubscriptionPage/PlanCard";
import axios from "axios";

type CardInfo = {
    id: number;
    type: "Free" | "Paid";
    price: number | null;
    name: string;
    duration: string; // Subscription duration (e.g., "Monthly", "Yearly")
    features: string[]; // Array of feature highlights
    supportLevel: string; // Level of customer support (e.g., "Basic", "Premium")
  };
  
const Subscriptions = () => {
  const [packs, setPacks] = useState<CardInfo[]>([]);
  const defaultPacks: CardInfo[] = [
    {
      id: 1,
      type: "Free",
      price: null,
      name: "Free Plan",
      duration: "Monthly",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      supportLevel: "Basic",
    },
    {
      id: 2,
      type: "Paid",
      price: 9.99,
      name: "Premium Plan",
      duration: "Yearly",
      features: ["All Features", "Priority Support", "Exclusive Content"],
      supportLevel: "Premium",
    },
  ];
  
  useEffect(() => {
    const fetchSubscriptionData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/subscriptions"
        );
        if (response.data && response.data.length > 0) {
          setPacks(response.data);
        } else {
          // If no data is returned, use default packs
          setPacks(defaultPacks);
        }
      } catch (error) {
        console.error("Error fetching subscription data:", error);
        // If there's an error, use default packs
        setPacks(defaultPacks);
      }
    };

    fetchSubscriptionData();
  }, []);

  return (
    <MainContainer>
      <div
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "50px 10%",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            fontSize: "35px",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Choose Your Plan
        </div>
        <div
          style={{
            fontSize: "22px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Select the best plan that fits your needs
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {packs.map((item) => (
            <PlanCard key={item.id} cardInfo={item} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Subscriptions;
