// AboutUs.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import CustomImage from "@/components/custom-image";
import ComponentWrapper from "../component-wrapper";

const AboutUs = () => {
  return (
    <ComponentWrapper>
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 text-center lg:text-left">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between">
            <div className="lg:w-1/3">
              <div className="py-4">
                <p className="text-4xl font-bold text-blue-900 mb-4">
                  About Us
                </p>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Who are we? Opennetic is a team of talented individuals
                    working together to make software people love.
                  </p>
                  <p>
                    We distribute multi-award-winning enterprise-class software
                    that helps IT teams audit IT environments.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4 justify-center lg:justify-start">
                <Button className="px-6 py-3 rounded-2xl text-white bg-blue-500 hover:bg-blue-600 ">
                  Contact Us
                </Button>
                <Button className="px-6 py-3 rounded-2xl text-white bg-green-500 hover:bg-green-600">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="lg:w-2/3 mb-8 h-96 lg:mb-0 justify-end flex">
              <div className="w-1/2 h-full">
                <CustomImage
                  src="https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798"
                  alt="Office team"
                  className="rounded-xl overflow-hidden shadow-lg rounded-tr-[60px] rounded-bl-[60px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ComponentWrapper>
  );
};

// Make sure it's the default export
export default AboutUs;
