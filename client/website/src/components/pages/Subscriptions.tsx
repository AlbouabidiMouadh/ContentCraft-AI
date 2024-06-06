"use client";
import MainContainer from "@/containers/MainContainer";
import React, { useEffect, useState } from "react";
import PlanCard from "@/components/SubscriptionPage/PlanCard";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type CardInfo = {
  id: number;
  type: "Free" | "Paid";
  price: number | "Free"; // Update the type to allow null
  name: string;
  duration: string;
  features: string[];
  supportLevel: string;
  link: string;
};

const Subscriptions = () => {
  const [packs, setPacks] = useState<CardInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const defaultPacks: CardInfo[] = [
    {
      id: 1,
      type: "Free",
      price: "Free",
      name: "Free Plan",
      duration: "Monthly",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      supportLevel: "Basic",
      link: "/auth/user/signup",
    },
    {
      id: 2,
      type: "Paid",
      price: 9.99,
      name: "Premium Plan",
      duration: "Yearly",
      features: ["All Features", "Priority Support", "Exclusive Content"],
      supportLevel: "Premium",
      link: "/subscription/payment",
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
      } finally {
        setLoading(false); // Set loading to false after data is fetched
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
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh', // Adjust the height as needed
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
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
              <PlanCard
                key={item.id}
                type={item.type}
                price={item.price}
                upgradeLink={item.link} // Provide a placeholder value for upgradeLink
                color={item.type === "Free" ? "white" : "black"} // Dynamically set card color
                promo={null} // Provide a placeholder value for promo
                features={item.features}
              />
            ))}
          </div>
        )}
      </div>
    </MainContainer>
  );
};

export default Subscriptions;
