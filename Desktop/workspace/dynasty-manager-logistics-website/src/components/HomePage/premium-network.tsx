"use client";

import React, { useState } from "react";

import Enterprise from "./premium-components/enterprise";
import MSP from "./premium-components/msp";
import Service from "./premium-components/service";
import ComponentWrapper from "../component-wrapper";

const data = [
  { title: "Service Providers", content: <Service /> },
  { title: "MSP", content: <MSP /> },
  { title: "Enterprise", content: <Enterprise /> },
];

const PremiumNetwork = () => {
  const [selected, setSelected] = useState(data[0]);

  return (
    <ComponentWrapper bg="bg-blue-50" className="text-start">
      <h2 className="text-3xl font-bold mb-4">Premium Network Management</h2>
      <div className="flex flex-wrap gap-2 mb-6 items-center text-xs">
        {data.map((value, index) => (
          <span
            key={index}
            className={`px-4 py-2 cursor-pointer rounded-3xl border text-xs whitespace-nowrap font-medium flex-1 sm:flex-none text-center ${
              selected === value
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600"
            }`}
            onClick={() => setSelected(value)}
          >
            {value.title}
          </span>
        ))}
      </div>
      <div className="pt-4">{selected.content}</div>
    </ComponentWrapper>
  );
};

export default PremiumNetwork;
