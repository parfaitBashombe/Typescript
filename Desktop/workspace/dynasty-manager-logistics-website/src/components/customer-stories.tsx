"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomImage from "./custom-image";
import ComponentWrapper from "./component-wrapper";

const CustomerStories = () => {
  const stories = [
    {
      logo: "https://ik.imagekit.io/zzot6yvyh/images/stanford.png?updatedAt=1735389499526",
      quote:
        "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kits I have come across. It's so flexible, well-organized, and easily editable.",
      name: "Floyd Miles",
      position: "Vice President, GoPro",
    },
    {
      logo: "https://ik.imagekit.io/zzot6yvyh/images/Group%203512.png?updatedAt=1735389499478",
      quote:
        "I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
      name: "Jane Coope",
      position: "CEO, Airbnb",
    },
    {
      logo: "https://ik.imagekit.io/zzot6yvyh/images/microsoft.png?updatedAt=1735389499620",
      quote: "Landify saved our time in designing my company page.",
      name: "John Doe",
      position: "HR",
    },
    {
      logo: "https://ik.imagekit.io/zzot6yvyh/images/google.png?updatedAt=1735389499533",
      quote:
        "Using Landify has been a game-changer for us. Our team saved countless hours on design work.",
      name: "Alice Johnson",
      position: "Product Manager, Google",
    },
    {
      logo: "https://ik.imagekit.io/zzot6yvyh/images/allerog.png?updatedAt=1735389499529",
      quote:
        "I highly recommend Landify to any startup looking to build a professional landing page quickly and efficiently.",
      name: "Robert Smith",
      position: "CTO, Meta",
    },
    {
      logo: "https://ik.imagekit.io/zzot6yvyh/images/zurich.png?updatedAt=1735389499627",
      quote:
        "Landify provided us with an incredible toolkit to design an engaging landing page effortlessly.",
      name: "Emily Carter",
      position: "Head of Marketing, Amazon",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const displayedStories = stories.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 3 < stories.length ? prevIndex + 3 : 0
    );
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : stories.length - 3
    );
  };

  return (
    <ComponentWrapper bg="bg-gray-300" className="text-black py-16">
      <section className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Real Stories from Real Customers
        </h2>
        <p className="text-black mb-10">
          Hear from professionals who’ve used Landify to streamline their work.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedStories.map((story, index) => (
            <div
              key={index}
              className="bg-white h-80 rounded-lg shadow-md p-6 pt-4 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-4">
                <CustomImage
                  objectFit="contain"
                  src={story.logo}
                  alt={`${story.name}'s company logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;{story.quote}&quot;
              </p>
              <div>
                <h3 className="text-black font-semibold">{story.name}</h3>
                <p className="text-gray-700 text-sm">{story.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8 space-x-4">
          <Button
            onClick={handlePrevious}
            size="icon"
            className="bg-gray-800 text-white hover:bg-gray-700 p-2 rounded-full"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={handleNext}
            size="icon"
            className="bg-gray-800 text-white hover:bg-gray-700 p-2 rounded-full"
          >
            <ChevronRight />
          </Button>
        </div>
      </section>
    </ComponentWrapper>
  );
};

export default CustomerStories;
