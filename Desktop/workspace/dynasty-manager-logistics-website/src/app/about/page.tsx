import AboutUs from "@/components/About/Hero-section";
import MeetOurTeamLeaders from "@/components/About/team-leaders";
import TrustedCompanies from "@/components/trusted-companies";
import React from "react";

const Page = () => {
  return (
    <div>
      <AboutUs />
      <TrustedCompanies />
      <MeetOurTeamLeaders />
    </div>
  );
};

export default Page;
