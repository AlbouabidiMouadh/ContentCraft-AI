import CustomersThoughtsSection from "@/components/HomePage/CustomersThoughtsSection";
import FeaturedSection from "@/components/HomePage/FeaturedSection";
import FreeSection from "@/components/HomePage/FreeSection";
import FrequentQuestionsSection from "@/components/HomePage/FrequentQuestionsSection";
import HeaderSection from "@/components/HomePage/HeaderSection";
import PlanSection from "@/components/HomePage/PlanSection";
import QualitySection from "@/components/HomePage/QualitySection";
import MainContainer from "@/containers/MainContainer";
import type { Metadata } from "next";

export const metadata = { title: `ContentCraft AI | Home` } satisfies Metadata;

export default function Home() {
  return (
    <MainContainer>
      <HeaderSection />
      <FeaturedSection />
      <FreeSection />
      <CustomersThoughtsSection />
      <PlanSection />
      <QualitySection />
      <FrequentQuestionsSection />
    </MainContainer>
  );
}
