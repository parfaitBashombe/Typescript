import React from "react";
import ComponentWrapper from "../component-wrapper";
import { Button } from "../ui/button";
import { CircleCheckBig } from "lucide-react";

const DecisionHelp = () => {
  return (
    <ComponentWrapper className="py-16">
      <section className="bg-gray-900 py-10 px-6 text-center text-white rounded-xl">
        <div>
          <h2 className="text-xl lg:text-3xl font-bold mb-4">
            Need Help Making a Decision?
          </h2>
          <Button className="bg-green-500 text-white px-6 py-2 rounded-2xl shadow hover:bg-green-600 mb-6">
            Book a Demo
          </Button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-start">
            <p className="flex gap-2">
              <CircleCheckBig className="h-1/2" />
              See the changes you can make by using automated features that
              matter to you.
            </p>
            <p className="flex gap-2">
              <CircleCheckBig className="h-1/2" />
              Learn how FirstWave technology can be customized for your business
              needs.
            </p>
            <p className="flex gap-2">
              <CircleCheckBig className="h-1/2" />
              Get top-notch support from our cybersecurity & infrastructure
              management experts.
            </p>
          </div>
        </div>
      </section>
    </ComponentWrapper>
  );
};

export default DecisionHelp;
