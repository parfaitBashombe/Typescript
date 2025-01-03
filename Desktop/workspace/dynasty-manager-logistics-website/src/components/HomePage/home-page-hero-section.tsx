"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import ComponentWrapper from "../component-wrapper";
import { Input } from "../ui/input";
import CustomImage from "../custom-image";

const Hero = () => {
  const [checked, setChecked] = useState("cybersecurity");

  const handleRadioChange = (value: string) => {
    setChecked(value);
  };

  return (
    <ComponentWrapper className="py-16">
      <div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:justify-between items-center">
          {/* Left Section */}
          <div className="w-full text-start">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-900">
              Maximize Your IT Investment
            </h1>
            <div className="mt-4 text-gray-600">
              We will help you to audit, manage, automate, and secure your
              entire business.
              <p className="font-bold">Schedule a demo with our specialists.</p>
            </div>
            <div className="flex items-center mt-6 space-x-4">
              <label className="flex items-center cursor-pointer">
                <Input
                  type="radio"
                  name="service"
                  value="cybersecurity"
                  checked={checked === "cybersecurity"}
                  onChange={() => handleRadioChange("cybersecurity")}
                  className="w-4 h-4 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Cybersecurity</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <Input
                  type="radio"
                  name="service"
                  value="network-management"
                  checked={checked === "network-management"}
                  onChange={() => handleRadioChange("network-management")}
                  className="w-4 h-4 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Network Management</span>
              </label>
            </div>
            <Button className="mt-6 text-white bg-green-500 rounded-2xl hover:bg-green-600">
              Book a Demo
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex justify-end w-full h-56 md:h-96">
            <CustomImage
              objectFit="cover"
              src="https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798"
              alt="Team collaboration"
              className="w-full md:w-4/5 overflow-hidden rounded-full"
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
