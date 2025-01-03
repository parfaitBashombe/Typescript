import React from "react";
import CustomImage from "../custom-image";
import { Button } from "../ui/button";
import ComponentWrapper from "../component-wrapper";

const PremiumSupport = () => {
  return (
    <ComponentWrapper
      bg="bg-gradient-to-r from-purple-50 to-green-50"
      className="py-16 text-start"
    >
      <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        {/* Left Section */}
        <div className="text-center md:text-start md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Premium Support
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT, and all of our commercial products. They have
            helped customers from Telcos, MSP, and enterprise organizations.
          </p>
          <p className="text-gray-600 mb-6 text-sm">
            We work closely with you during implementation and rollout, as well
            as post-delivery of our solutions.
          </p>
          <Button className="bg-blue-500 text-white rounded-2xl hover:bg-blue-600">
            Go to Support
          </Button>
        </div>

        {/* Right Section - Suspended Images */}
        <div className="relative w-full h-[300px]">
          {/* Top Image */}
          <div className="absolute top-0 right-10 w-[50%] h-full shadow-2xl p-2 rounded-3xl bg-white">
            <CustomImage
              src="https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798"
              alt="Support Engineer"
              className="w-full overflow-hidden rounded-2xl h-auto"
            />
          </div>

          {/* Bottom Image */}
          <div className="absolute bottom-0 left-0 w-[50%] transform translate-y-8 h-full shadow-2xl p-2 rounded-3xl bg-white">
            <CustomImage
              src="https://ik.imagekit.io/zzot6yvyh/Hunter.jpeg?updatedAt=1734360188711"
              alt="Support Team"
              className="w-full h-auto overflow-hidden rounded-2xl"
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PremiumSupport;
