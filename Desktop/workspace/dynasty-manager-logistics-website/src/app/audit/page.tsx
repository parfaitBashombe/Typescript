import ComponentWrapper from "@/components/component-wrapper";
import CustomImage from "@/components/custom-image";
import CustomerStories from "@/components/customer-stories";
import PremiumSupport from "@/components/Product/premium-support";
import Usage from "@/components/Product/usage";
import TrustedCompanies from "@/components/trusted-companies";
import { Button } from "@/components/ui/button";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <ComponentWrapper className=" mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="uppercase text-sm text-blue-500 mb-2">
            Network Management Product
          </p>
          <p className="text-4xl font-bold text-gray-800 mb-4">NMIS 9</p>
          <p className="w-2/3 mb-4">
            The backbone of your network management system.
          </p>
          <p className="text-gray-600 w-2/3">
            Network Management Information System (NMIS) is the robust software
            platform underpinning Opmantek Performance and Management solutions.
          </p>
          <div className="mt-6 flex space-x-4">
            <Button className="bg-blue-500 text-white rounded-2xl hover:bg-blue-600">
              Free Download
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 rounded-2xl">
              Book a Demo
            </Button>
          </div>
        </div>
        <div>
          <CustomImage
            alt={"img"}
            src="https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798"
            className="overflow-hidden w-full h-full rounded-2xl"
          />
        </div>
      </ComponentWrapper>
      <TrustedCompanies />
      <Usage />
      <PremiumSupport />
      <CustomerStories />
    </div>
  );
};

export default ProductPage;
