"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import ComponentWrapper from "../component-wrapper";

const plans = [
  {
    name: "Pro",
    description:
      "Ideal for those who've already got their website up and running and are seeking assistance to enhance and update it further.",
    price: 2500,
    features: [
      "3-5 day turnaround",
      "Native Development",
      "Task delivered one-by-one",
      "Dedicated dashboard",
      "Updates via Dashboard & Slack",
    ],
    buttonText: "Get started",
  },
  {
    name: "Pro Plus",
    description:
      "Ideal if you want to build or scale your website fast, with the strategy calls included.",
    price: 3800,
    features: [
      "1-3 day turnaround",
      "Monthly strategy call",
      "Commercial license",
      "Native Development",
      "Tasks delivered one-by-one",
      "Dedicated dashboard",
      "Updates via Dashboard & Slack",
    ],
    buttonText: "Get started",
  },
  {
    name: "Custom",
    description:
      "If these plans don't fit, let's create one that suits. Customize your subscription for a perfect fit, bigger or smaller!",
    price: null,
    features: [
      "Everything in design & development",
      "Strategy workshop",
      "Priority support",
      "Multiple tasks at once",
      "Ongoing autonomous A/B testing",
      "Advanced custom development",
    ],
    buttonText: "Book a Call",
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  const handleBillingCycleChange = (cycle: string) => {
    setBillingCycle(cycle);
  };

  return (
    <ComponentWrapper
      bg="bg-gradient-to-b from-purple-100 to-purple-50"
      className=" py-16"
    >
      <div className=" text-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-gray-800 mb-4">
            Choose your right plan!
          </p>
          <p className="text-gray-600 mb-6 w-full md:w-2/3">
            Select from best plans, ensuring a perfect match. Need more or less?
            Customize your subscription for a seamless fit!
          </p>
          <div className="flex w-full md:w-2/3 rounded-3xl bg-white p-2 justify-center items-center flex-row gap-2 mb-8">
            <Button
              className={`text-xs lg:text-lg w-1/2 rounded-2xl font-medium transition-all shadow-none ${
                billingCycle === "Monthly"
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "text-black bg-white border-none hover:bg-gray-50"
              }`}
              onClick={() => handleBillingCycleChange("Monthly")}
            >
              Monthly
            </Button>
            <Button
              className={`text-xs lg:text-lg w-1/2 rounded-2xl font-medium transition-all shadow-none ${
                billingCycle === "Quarterly"
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : " text-gray-800 bg-white border-none hover:bg-gray-50"
              }`}
              onClick={() => handleBillingCycleChange("Quarterly")}
            >
              Quarterly (save 10%)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={` rounded-2xl shadow-lg ${
                plan.name === "Custom"
                  ? " bg-gradient-to-b from-purple-200 to-purple-50 "
                  : " bg-white "
              } p-6 border border-gray-200 h-auto relative`}
            >
              <p
                className={`text-lg w-fit rounded-2xl  font-bold px-4 py-1 ${
                  plan.name === "Custom"
                    ? " text-black bg-white "
                    : " text-white bg-purple-600 "
                }  mb-2`}
              >
                {plan.name}
              </p>
              <p className="text-gray-600 text-sm my-4">{plan.description}</p>
              <div className="text-4xl font-bold text-gray-800 mb-4">
                {plan.price ? (
                  <>
                    ${plan.price}
                    <span className="text-lg font-normal text-gray-600">
                      /month
                    </span>
                  </>
                ) : (
                  "Let's Talk!"
                )}
                <div className="h-[1px] bg-gray-400 mt-4" />
              </div>
              <ul className="text-sm space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={
                  plan.buttonText === "Book a Call" ? "default" : "outline"
                }
                className="rounded-2xl w-auto font-medium transition-all"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PricingPlans;
