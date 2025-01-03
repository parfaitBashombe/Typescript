import TrustedCompanies from "@/components/trusted-companies";
import CustomerStories from "../components/customer-stories";
import CyberSecurityPlatform from "../components/HomePage/cyber-security-platform";
import DecisionHelp from "../components/HomePage/decision-help";
import Hero from "../components/HomePage/home-page-hero-section";
import PremiumNetwork from "../components/HomePage/premium-network";

import React from "react";
import Faq from "@/components/HomePage/faq";
import PricingPlans from "@/components/HomePage/pricing";

const HomePage = () => {
  return (
    <div className="text-center">
      <Hero />
      <TrustedCompanies />
      <PremiumNetwork />
      <CyberSecurityPlatform />
      <PricingPlans />
      <DecisionHelp />
      <CustomerStories />
      <Faq />
    </div>
  );
};

export default HomePage;
