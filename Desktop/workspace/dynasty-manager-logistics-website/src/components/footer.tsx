"use client";

import React, { useState } from "react";
import CustomImage from "./custom-image";
import ComponentWrapper from "./component-wrapper";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Smartphone,
  MapPin,
  CircleMinus,
  CirclePlus,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const sections = [
  {
    title: "Opmentek",
    links: [
      { label: "Get demo", href: "#" },
      { label: "Download", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "NMIS", href: "#" },
      { label: "Open-AudIT", href: "#" },
      { label: "opEvents", href: "#" },
      { label: "opConfig", href: "#" },
      { label: "opHA", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Opmentek Wiki", href: "#" },
      { label: "Prices", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
];

const Footer = () => {
  const [activeStates, setActiveStates] = useState<boolean[]>(
    new Array(sections.length).fill(false)
  );

  const toggleAnswer = (index: number) => {
    setActiveStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  const contactInfo = [
    { icon: <Mail size={16} />, label: "Support:", value: "hello@landify.co" },
    {
      icon: <Smartphone size={16} />,
      label: "General:",
      value: "+91 98765 43210",
    },
    {
      icon: <MapPin size={16} />,
      label: "USA Office:",
      value: "772 Lyonwood Ave Walnut, CA 91789",
    },
    {
      icon: <MapPin size={16} />,
      label: "Australia Office:",
      value: "772 Lyonwood Ave Walnut, CA 91789",
    },
  ];

  const socialMediaIcons = [
    { key: "facebook", value: <Facebook size={16} /> },
    { key: "twitter", value: <Twitter size={16} /> },
    { key: "linkedIn", value: <Linkedin size={16} /> },
    { key: "instagram", value: <Instagram size={16} /> },
  ];

  return (
    <ComponentWrapper>
      <footer className="py-8">
        <div className="container">
          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-4 gap-4 text-sm">
            {/* Logo and Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">FirstWave</h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non leo at justo posuere luctus.
              </p>
              <div className="grid grid-cols-2 my-4 h-20 mb-4">
                <div className="w-20 h-full">
                  <CustomImage
                    src="https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798"
                    alt="img"
                    className=" rounded-full overflow-hidden"
                  />
                </div>
                <div className="w-20 h-full">
                  <CustomImage
                    src="https://ik.imagekit.io/zzot6yvyh/Hunter.jpeg?updatedAt=1734360188711"
                    alt="img"
                    className=" rounded-full overflow-hidden"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 text-gray-600">
                {socialMediaIcons.map((icon, i) => (
                  <div
                    key={i}
                    className="p-1 border border-gray-600 hover:border-gray-800 rounded-full"
                  >
                    <Link href="#" className="hover:text-gray-800">
                      {icon.value}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {sections.map((section, index) => (
              <div key={index}>
                <p className="text-lg font-semibold text-gray-800">
                  {section.title}
                </p>
                <ul className="mt-2 space-y-2 text-gray-600">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="hover:text-gray-800">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 hidden md:block">
            <p className="text-lg font-semibold text-gray-800">Reach us</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {info.icon}
                  <div className="flex">
                    <p className="font-bold whitespace-nowrap">{info.label}</p>
                    <p className="text-xs">{info.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">FirstWave</h2>
                <p className="text-gray-600 mt-4">
                  We’re building tools based on psychometrics and data to
                  empower teams and individuals.
                </p>
                <div className="flex items-center gap-4 mt-4 h-20">
                  <div className="w-20 h-20">
                    <CustomImage
                      src="https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798"
                      alt="ISO 27001"
                      className=" rounded-full overflow-hidden"
                    />
                  </div>
                  <div className="w-20 h-20">
                    <CustomImage
                      src="https://ik.imagekit.io/zzot6yvyh/Hunter.jpeg?updatedAt=1734360188711"
                      alt="ISO 9001"
                      className=" rounded-full overflow-hidden"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 text-gray-600">
                  {socialMediaIcons.map((icon, i) => (
                    <div
                      key={i}
                      className="p-1 border border-gray-600 hover:border-gray-800 rounded-full"
                    >
                      <Link href="#" className="hover:text-gray-800">
                        {icon.value}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* sections */}
              <div className="space-y-2 w-full">
                {sections.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg"
                  >
                    <Button
                      variant="ghost"
                      onClick={() => toggleAnswer(index)}
                      className="w-full text-left flex justify-between items-center"
                    >
                      <span className="text-sm md:text-base font-medium">
                        {item.title}
                      </span>
                      <span className="text-2xl">
                        {activeStates[index] ? <CircleMinus /> : <CirclePlus />}
                      </span>
                    </Button>

                    <div
                      className={`p-3 text-xs md:text-base text-gray-700 border-t border-gray-300 transition-all duration-500 ease-in-out ${
                        activeStates[index]
                          ? "max-h-[500px] opacity-100"
                          : "hidden opacity-0"
                      } overflow-hidden`}
                    >
                      {item.links.map((link, i) => (
                        <ul key={i} className="list-disc px-4">
                          <li>
                            <Link href={link.href}>{link.label}</Link>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-800">Reach us</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      {info.icon}
                      <div>
                        <span className="font-bold whitespace-nowrap">
                          {info.label}
                        </span>
                        <p className="text-xs">{info.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="py-4 border-t mt-4 border-gray-200 text-gray-500 text-start text-sm space-y-2">
            <p>Opmentek 2022. All rights reserved</p>
            <p>
              <Link href="#" className="hover:underline">
                Terms & Privacy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </ComponentWrapper>
  );
};

export default Footer;
