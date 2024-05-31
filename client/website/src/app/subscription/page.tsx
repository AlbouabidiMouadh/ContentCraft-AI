import MainContainer from "@/containers/MainContainer";
import React from "react";
import type { Metadata } from "next";
import PlanCard from "@/components/SubscriptionPage/PlanCard";
import Subscriptions from "@/components/pages/Subscriptions";

export const metadata = {
  title: `ContentCraft AI | Subscription`,
} satisfies Metadata;

const index = () => {
  return <Subscriptions />;
};

export default index;
