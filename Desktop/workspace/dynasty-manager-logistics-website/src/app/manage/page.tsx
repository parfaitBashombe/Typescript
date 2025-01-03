import ComponentWrapper from "@/components/component-wrapper";
import CustomImage from "@/components/custom-image";
import Terms from "@/components/legal-terms/terms";
import { Button } from "@/components/ui/button";
import React from "react";

const LegalTermsPage = () => {
  return (
    <div>
      <ComponentWrapper className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 lg:py-12">
        <section className="mb-12 mr-8">
          <p className="text-3xl font-bold text-gray-800 mb-4">legal terms</p>
          <p>
            Opmantek prides itself on providing users access to all their data.
          </p>
          <p className="text-gray-600">
            This begins with our products giving you all the data on your
            network, but it extends to any of your personal information. We
            pride ourself on ensuring this is safe.
          </p>
          <Button className="bg-blue-500 text-white rounded-2xl hover:bg-blue-600 mt-6">
            Download All PDFs
          </Button>
        </section>
        <div className="flex justify-end">
          <CustomImage
            alt={"img"}
            src="https://ik.imagekit.io/zzot6yvyh/Hunter.jpeg?updatedAt=1734360188711"
            className="overflow-hidden w-2/3 rounded-2xl"
          />
        </div>
      </ComponentWrapper>

      <Terms />
    </div>
  );
};

export default LegalTermsPage;
