import React from "react";
import ComponentWrapper from "../component-wrapper";

const OurStory = () => {
  return (
    <ComponentWrapper>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-8">
            Opennetic began with a simple idea: to create powerful tools that
            simplify complex IT tasks. Since our founding, we have continuously
            evolved and expanded, becoming a trusted partner for thousands of
            businesses worldwide. We are passionate about helping IT teams work
            smarter, not harder, by providing intuitive solutions that drive
            efficiency and growth.
          </p>
        </div>
      </section>
    </ComponentWrapper>
  );
};

export default OurStory;
